import { useEffect, useState } from "react";

import {
  fetchCurrencyExchange,
  fetchCurrencyExchangeSymbols,
  updateSourceCurrency,
  updateTargetCurrency,
} from "../store/reducer/converterReducer";
import { useAppDispatch, useAppSelector } from "../store/storeHook";
import { useNavigate } from "react-router-dom";

export default function useHero() {
  const [amount, setAmount] = useState<number>(0);
  const { sourceCurrency, targetCurrency } = useAppSelector((state) => state);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [oneCurrency, setOneCurrency] = useState<number>(0);
  const [searchWord, setSearchWord] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const exchangeRates = useAppSelector((state) => state.rates);
  const symbols = useAppSelector((state) => state.symbols);
  const stateLoading = useAppSelector((state) => state.loading);

  useEffect(() => {
    setLoading(stateLoading);
  }, [exchangeRates, symbols, stateLoading]);

  useEffect(() => {
    dispatch(fetchCurrencyExchangeSymbols());
    dispatch(fetchCurrencyExchange());
  }, [dispatch]);

  useEffect(() => {
    const amountOne = 1;
    const sourceRate = parseFloat(exchangeRates[sourceCurrency]);
    const targetRate = parseFloat(exchangeRates[targetCurrency]);
    const exchangeRateAmount = amountOne / sourceRate;
    const oneConverted = exchangeRateAmount * targetRate;
    setOneCurrency(oneConverted);
  }, [targetCurrency, sourceCurrency, exchangeRates]);

  const handleConversion = () => {
    const targetRate = parseFloat(exchangeRates[targetCurrency]);
    const sourceRate = parseFloat(exchangeRates[sourceCurrency]);
    const exchangeRateAmount = amount / sourceRate;
    const converted = exchangeRateAmount * targetRate;
    setConvertedAmount(converted);
  };

  const handleDropDown = () => {
    if (!selectedCurrency) {
      alert("plz select currency");
    } else {
      navigate(`/list?currency=${selectedCurrency}`);
    }
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

  return {
    updateName2,
    loading,
    updateName,
    setIsActive2,
    isActive2,
    setIsActive,
    isActive,
    setSearchWord,
    searchWord,
    switchBtn,
    setAmount,
    oneCurrency,
    handleDropDown,
    convertedAmount,
    setSelectedCurrency,
    selectedCurrency,
    sourceCurrency,
    targetCurrency,
    setConvertedAmount,
    handleConversion,
    symbols,
  };
}
