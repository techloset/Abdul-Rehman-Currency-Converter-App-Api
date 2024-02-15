import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../instance/Instance";
import { CurrencyState } from "../../types/Types";

const initialState: CurrencyState = {
  date: "",
  symbols: {},
  rates: {},
  base: "",
  selectedCurrency: "",
  sourceCurrency: "AED",
  targetCurrency: "AFN",
  loading: false,
};

const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;
export const fetchCurrencyExchangeSymbols = createAsyncThunk(
  "currencyExchangeOption/fetchCurrencyExchangeOption",
  async () => {
    try {
      const response = await instance.get("symbols", {
        params: { access_key: apiKey },
      });

      return response.data.symbols;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCurrencyExchange = createAsyncThunk(
  "currencyExchange/fetchCurrencyExchange",
  async () => {
    try {
      const response = await instance.get("latest", {
        params: { access_key: apiKey },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const handleSelectedCurrency = createAsyncThunk(
  "selectedCurrency/setSelectedCurrency",
  async (selectedCurrency: string) => {
    try {
      return selectedCurrency;
    } catch (error) {
      throw error;
    }
  }
);

export const converterReducer = createSlice({
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
      .addCase(fetchCurrencyExchange.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrencyExchange.fulfilled, (state, action) => {
        state.base = action.payload?.base;
        state.date = action.payload?.date;
        state.rates = action.payload?.rates;
        state.loading = false;
      })
      .addCase(fetchCurrencyExchange.rejected, (state, action) => {
        alert("API call failed Currency Exchange");
        state.loading = false;
      })
      .addCase(fetchCurrencyExchangeSymbols.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrencyExchangeSymbols.fulfilled, (state, action) => {
        state.symbols = action.payload;
      })
      .addCase(fetchCurrencyExchangeSymbols.rejected, (state, action) => {
        alert("API call failed Currency Exchange Symbols");
        state.loading = false;
      })
      .addCase(handleSelectedCurrency.fulfilled, (state, action) => {
        state.selectedCurrency = action.payload;
      });
  },
});

export const { updateSourceCurrency, updateTargetCurrency } =
  converterReducer.actions;

export default converterReducer.reducer;
