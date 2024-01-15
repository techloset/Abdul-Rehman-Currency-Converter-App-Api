import { useEffect, useState } from "react";
import {fetchCurrencyExchange,  fetchCurrencyExchangeSymbols,} from "../store/reducer/ConverterReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHook";

export default function UseConverter() {

  const [amount, setAmount] = useState<number>(0);
  const { sourceCurrency, targetCurrency } = useAppSelector((state) => state);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [symbolsOtiopn, setSymbolsOtiopn] = useState<Record<string, string>>({});
  const [countrySymbols, setCountrySymbols] = useState<Record<string, string>>({});
  const [selectedCurreny, setSelectedCurrency] = useState("");
  const [oneCurrency, setOneCurrency] = useState<number>(0)



  const dispatch = useAppDispatch();
  const exchangeRates = useAppSelector((state) => state.rates);
  const symbols = useAppSelector((state) => state.symbols);



  useEffect(() => {
    setSymbolsOtiopn(exchangeRates);
    setCountrySymbols(symbols)
  }, [exchangeRates, symbols]);


  useEffect(() => {
    dispatch(fetchCurrencyExchangeSymbols());
    dispatch(fetchCurrencyExchange());
  }, [dispatch]);




  useEffect(() => {
    const amountOne = 1
    const sourceRate = parseFloat(symbolsOtiopn[sourceCurrency]);
    const targetRate = parseFloat(symbolsOtiopn[targetCurrency]);
    const exchangeRateAmount = (amountOne / sourceRate)
    const oneConverted = exchangeRateAmount * targetRate
    setOneCurrency(oneConverted)
  }, [targetCurrency, sourceCurrency])


  const handleConversion = () => {
    const targetRate = parseFloat(symbolsOtiopn[targetCurrency]);
    const sourceRate = parseFloat(symbolsOtiopn[sourceCurrency]);
    const exchangeRateAmount = (amount / sourceRate)
    const converted = exchangeRateAmount * targetRate;
    setConvertedAmount(converted);
  };





  return {
    setAmount,
    oneCurrency,
    amount,
    convertedAmount,
    selectedCurreny,
    setSelectedCurrency,
    symbolsOtiopn,
    sourceCurrency,
    targetCurrency,
    setConvertedAmount,
    handleConversion,
    countrySymbols,
  };
}
