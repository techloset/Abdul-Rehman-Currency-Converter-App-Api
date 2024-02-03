import { useEffect, useState } from "react";
import {
  fetchCurrencyExchange,
  fetchCurrencyExchangeSymbols,
  updateSourceCurrency,
  updateTargetCurrency,
} from "../store/reducer/ConverterReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHook";

export default function UseConverter() {
  const [amount, setAmount] = useState<number>(0);
  const { sourceCurrency, targetCurrency } = useAppSelector((state) => state);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [symbolsOption, setSymbolsOption] = useState<Record<string, string>>(
    {}
  );
  const [countrySymbols, setCountrySymbols] = useState<Record<string, string>>(
    {}
  );
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [oneCurrency, setOneCurrency] = useState<number>(0);
  const [searchWord, setSearchWord] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const exchangeRates = useAppSelector((state) => state.rates);
  const symbols = useAppSelector((state) => state.symbols);
  const stateLoading = useAppSelector((state) => state.loading);

  useEffect(() => {
    if (
      Object.keys(exchangeRates).length > 0 &&
      Object.keys(symbols).length > 0
    ) {
      setSymbolsOption(exchangeRates);
      setCountrySymbols(symbols);
      setLoading(stateLoading);
    }
  }, [exchangeRates, symbols]);

  useEffect(() => {
    dispatch(fetchCurrencyExchangeSymbols());
    dispatch(fetchCurrencyExchange());
  }, [dispatch]);

  useEffect(() => {
    const amountOne = 1;
    const sourceRate = parseFloat(symbolsOption[sourceCurrency]);
    const targetRate = parseFloat(symbolsOption[targetCurrency]);
    const exchangeRateAmount = amountOne / sourceRate;
    const oneConverted = exchangeRateAmount * targetRate;
    setOneCurrency(oneConverted);
  }, [targetCurrency, sourceCurrency, symbolsOption]);

  const handleConversion = () => {
    const targetRate = parseFloat(symbolsOption[targetCurrency]);
    const sourceRate = parseFloat(symbolsOption[sourceCurrency]);
    const exchangeRateAmount = amount / sourceRate;
    const converted = exchangeRateAmount * targetRate;
    setConvertedAmount(converted);
  };

  const switchBtn = () => {
    const tempCurrency = sourceCurrency;
    dispatch(updateSourceCurrency(targetCurrency));
    dispatch(updateTargetCurrency(tempCurrency));
  };

  const updateName = (sourceCurrency: string) => {
    setSearchWord("");
    dispatch(updateSourceCurrency(sourceCurrency));
    setIsActive(false);
  };

  const updateName2 = (targetCurrency: string) => {
    setSearchWord("");
    dispatch(updateTargetCurrency(targetCurrency));
    setIsActive2(false);
  };

  const filteredCountryList = Object.entries(countrySymbols ?? {}).filter(
    ([currencyCode, country]) =>
      currencyCode !== targetCurrency &&
      (currencyCode.toLowerCase().includes(searchWord.toLowerCase()) ||
        country.toLowerCase().includes(searchWord.toLowerCase()))
  );

  return {
    filteredCountryList,
    loading,
    updateName2,
    updateName,
    switchBtn,
    setIsActive2,
    isActive2,
    isActive,
    setIsActive,
    setSearchWord,
    searchWord,
    setAmount,
    oneCurrency,
    amount,
    convertedAmount,
    selectedCurrency,
    setSelectedCurrency,
    symbolsOption,
    sourceCurrency,
    targetCurrency,
    setConvertedAmount,
    handleConversion,
    countrySymbols,
  };
}
