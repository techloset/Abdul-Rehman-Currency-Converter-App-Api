import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHook";
import {
  fetchCurrencyExchangeSymbols,
  handleSelectedCurrency,
} from "../store/reducer/converterReducer";
import { useLocation } from "react-router-dom";

export default function useCurrencyConvertList() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const popularCurrency = useAppSelector((state) => state.selectedCurrency);

  const symbols = useAppSelector((state) => state.symbols);

  useEffect(() => {
    dispatch(fetchCurrencyExchangeSymbols());
  }, [dispatch]);
  const countryName = symbols[popularCurrency];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedCurrency = searchParams.get("currency");
    if (selectedCurrency) {
      dispatch(handleSelectedCurrency(selectedCurrency));
    }
  }, [dispatch, location.search]);

  return [popularCurrency, countryName];
}
