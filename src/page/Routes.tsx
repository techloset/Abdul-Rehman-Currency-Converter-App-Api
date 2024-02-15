import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import CurrencyConvertList from "./currencyConvertList/CurrencyConvertList";
import Converter from "./converter/Converter";
export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<CurrencyConvertList />} />
        <Route path="/convert" element={<Converter />} />
      </Routes>
    </>
  );
}
