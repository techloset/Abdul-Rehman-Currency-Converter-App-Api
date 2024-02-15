export interface CurrencyState {
  base: string;
  date: string;
  symbols: { [key: string]: string };
  rates: { [key: string]: string };
  selectedCurrency: string;
  sourceCurrency: string;
  targetCurrency: string;
  loading: boolean;
}
