import logo from "../../../assets/images/pngwing.com.png";
import { useNavigate } from "react-router-dom";
import logo2 from "../../../assets/images/arrow-right.png";
import useCurrencyConvertList from "../../../hooks/useCurrencyConvertList";
import { useAppDispatch } from "../../../store/storeHook";
import {
  updateSourceCurrency,
  updateTargetCurrency,
} from "../../../store/reducer/ConverterReducer";
import {  useState } from "react";

export default function CurrencyConvertList() {
  const [popularCurrency,countryName] = useCurrencyConvertList();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  
  const list = [
    "USD",
    "EUR",
    "JOD",
    "OMR",
    "PKR",
    "INR",
    "AFN",
    "AED",
    "AUD",
    "QAR",
    "VND",
    "CAD",
  ];
  return (
    <>
      <div className="bg-sky-200 py-12">
        <div className="flex justify-around">
          <div className="w-12/12 sm:w-6/12 ">
            <h1 className="text-3xl font-bold">{countryName ?? null}</h1>
            <p className="py-3">
              The United States Dollar is the official currency of the United
              States and several other countries. Its currency code is USD and
              it’s symbol using the $ sign. $1 is made up of 100 cents. With
              a World Account, you can pay and collect USD using local bank
              details – and you don’t need an overseas address.
            </p>
            <button className="border-2 rounded-md border-red-500 px-16 py-3 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500">
              Compare Rate
            </button>
          </div>
          <div className="hidden md:block">
            <img src={logo} alt="" className="w-96 opacity-40" />
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold">
          Exchange &nbsp;
          <span>{popularCurrency ?? null}</span>
          &nbsp; without hidden fees
        </h1>
        Wherever you need to send
        <span></span>
        our pricing is clear and simple. Our model is made up <br />
        of two parts: an FX rate and a small payment fee – that’s it. So what
        you see at the time of <br />
        your transaction is exactly what you’ll pay – there are no hidden
        charges.
      </div>
      <div className="hidden mt-24 sm:block ">
        <div className="flex px-10 justify-center mb-8">
          <div className="flex sm:block md:flex">
            <div className="grid grid-rows-4 md:grid-rows-3 grid-flow-col ">
              {list
                .slice(0, 12)
                .filter((item) => popularCurrency !== item)
                .map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-center items-center w-36 p-4 font-bold list-none mx-5 my-4 cursor-pointer"
                    style={{ backgroundColor: "#f6f6f6" }}
                    onClick={() => {
                      dispatch(updateSourceCurrency(popularCurrency as string));
                      dispatch(updateTargetCurrency(item as string));
                      navigate(`/convert?from=${popularCurrency}&to=${item}`);
                    }}
                  >
                    {popularCurrency ?? null}
                    <img src={logo2} alt="logo2" className="w-3 h-3 mx-6" />
                    <span>{item}</span>
                  </li>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-3 sm:hidden ">
          <div className=" text-center mt-3">
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="text-center w-4/12 p-1 border-2 text-gray-400"
            >
              {list
                ?.filter((item) => popularCurrency !== item)
                .map((item, i) => (
                  <option key={i} value={item}>
                    {typeof popularCurrency === "string"
                      ? `${popularCurrency} To ${item}`
                      : null}
                  </option>
                ))}
            </select>
          </div>

          <button
            className="border-2 mt-3 rounded-md border-red-500 mx-4 px-8 py-1 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500"
            onClick={() => {
              dispatch(updateSourceCurrency(popularCurrency as string));
              dispatch(updateTargetCurrency(selectedCurrency));
              navigate(
                `/convert?from=${popularCurrency}&to=${selectedCurrency}`
              );
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
