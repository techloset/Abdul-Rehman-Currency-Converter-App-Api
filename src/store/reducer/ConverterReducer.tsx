import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CurrencyState {
  base: string;
  date: string;
  symbols: { [key: string]: string };
  rates: { [key: string]: string };
  selectedCurreny: string;
  sourceCurrency: string;
  targetCurrency: string;
}

const initialState: CurrencyState = {
  date: "",
  symbols: {},
  rates: {},
  base: "",
  selectedCurreny: "",
  sourceCurrency: "AED",
  targetCurrency: "AFN"
};
const urlApi =
"https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/symbols?access_key=3479c11d574a31bbec3eb7767ecc2ecd"
export const fetchCurrencyExchangeSymbols = createAsyncThunk(
  "currencyExchangeOption/fetchCurrencyExchangeOption",
  async () => {
    try {

      const response = await axios.get(urlApi);
      return response.data.symbols;
    } catch (error) {
      throw error;
    }
  }
);

const urlApiExChange =
  "https://route-handler-bootcamp.vercel.app/api/http:/api.exchangeratesapi.io/v1/latest?access_key=3479c11d574a31bbec3eb7767ecc2ecd"

export const fetchCurrencyExchange = createAsyncThunk(
  "currencyExchange/fetchCurrencyExchange",
  async () => {
    try {
      const response = await axios.get(urlApiExChange);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const handleSelectedCurrency = createAsyncThunk(
  "selectedCurrency/setSelectedCurrency",
  async (selectedCurreny: string) => {
    try {
      return selectedCurreny;
    } catch (error) {
      throw error;
    }
  }
);

export const ConverterReducer = createSlice({
  name: "currencyExchange",
  initialState,
  reducers: {
    updateSourceCurrency: (state, action: PayloadAction<string>) => {
      state.sourceCurrency = action.payload;
    },
    updateTargetCurrency: (state, action: PayloadAction<string>) => {
      state.targetCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyExchange.fulfilled, (state, action) => {
        state.base = action.payload?.base;
        state.date = action.payload?.date;
        state.rates = action.payload?.rates;
      })
      .addCase(fetchCurrencyExchangeSymbols.fulfilled, (state, action) => {
        state.symbols = action.payload;
      })
      .addCase(handleSelectedCurrency.fulfilled, (state, action) => {
        state.selectedCurreny = action.payload;
      });
  },
});

export const { updateSourceCurrency, updateTargetCurrency } =

  ConverterReducer.actions;

export default ConverterReducer.reducer;
