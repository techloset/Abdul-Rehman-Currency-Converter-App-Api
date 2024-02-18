import logo from "../../assets/images/pngwing.com.png";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/arrow-right.png";
import useCurrencyConvertList from "../../hooks/useCurrencyConvertList";
import { useAppDispatch } from "../../store/storeHook";
import downArrow from "../../assets/images/caret-down.png";
import {
  updateSourceCurrency,
  updateTargetCurrency,
} from "../../store/reducer/converterReducer";
import { useState } from "react";
import useHome from "../../hooks/useHome";

export default function CurrencyConvertList() {
  const [popularCurrency, countryName] = useCurrencyConvertList();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    updateName2,
    setIsActive2,
    isActive2,
    setSearchWord,
    searchWord,
    targetCurrency,
  } = useHome();

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
      <div className="bg-[#F0F5FF] py-12">
        <div className="flex justify-around">
          <div className="w-12/12 sm:w-6/12 ">
            <h1 className="text-[60px]  font-roboto leading-[100px] font-bold">
              {countryName ?? null}
            </h1>
            <p className="py-3 font-roboto font-normal text-[16px] leading-[24px]">
              The United States Dollar is the official currency of the United
              States and several other countries. Its currency code is USD and
              it’s symbol using the $ sign. $1 is made up of 100 cents. With a
              World Account, you can pay and collect USD using local bank
              details – and you don’t need an overseas address.
            </p>
            <button className="border-2 rounded-md border-primary px-16 py-3 bg-primary text-white font-bold hover:bg-white hover:text-primary">
              Compare Rate
            </button>
          </div>
          <div className="hidden md:block">
            <img src={logo} alt="" className="w-[555px] opacity-40" />
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-[32px] leading-[42px] font-bold">
          Exchange &nbsp;
          <span>{popularCurrency ?? null}</span>
          &nbsp; without hidden fees
        </h1>
        <p className="font-roboto font-normal text-[16px] leading-[24px]">
          Wherever you need to send
          <span></span>
          our pricing is clear and simple. Our model is made up <br />
          of two parts: an FX rate and a small payment fee – that’s it. So what
          you see at the time of <br />
          your transaction is exactly what you’ll pay – there are no hidden
          charges.
        </p>
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
                    className="flex justify-center w-[210px] items-center h-[83px] p-4 font-bold list-none mx-5 my-4 cursor-pointer"
                    style={{ backgroundColor: "#f6f6f6" }}
                    onClick={() => {
                      dispatch(updateSourceCurrency(popularCurrency as string));
                      dispatch(updateTargetCurrency(item as string));
                      navigate(`/convert?from=${popularCurrency}&to=${item}`);
                    }}
                  >
                    <span className="font-roboto font-bold text-[16px] leading-[18.75px]">
                      {popularCurrency ?? null}
                    </span>

                    <img
                      src={logo2}
                      alt="logo2"
                      className="w-[14px] h-[16px] mx-6"
                    />
                    <span className="font-roboto font-bold text-[16px] leading-[18.75px]">
                      {item}
                    </span>
                  </li>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  flex-col justify-center items-center text-center mt-3 sm:hidden ">
          <div className="relative border-2   w-[320px] h-[44px] flex flex-row    mt-2 rounded-sm   ">
            <div
              className={`wrapper flex w-fit  inset-y-0 right-0  px-6   ${
                isActive2 ? "active" : ""
              }`}
            >
              <div
                className="flex  justify-around items-center cursor-pointer  w-[300px] "
                onClick={() => setIsActive2(!isActive2)}
              >
                <span className="font-roboto font-bold">{popularCurrency}</span>
                <img
                  src={logo2}
                  alt="logo2"
                  className="w-[14px] h-[16px] mx-6"
                />
                <span className="font-roboto font-bold">
                  {selectedCurrency}
                </span>
                <img src={downArrow} className="pl-3" alt="caret-down" />
              </div>
              <div className="content absolute right-0 top-full hidden p-6  bg-white w-[320px]  max-h-[340px]  overflow-y-auto pr-[7px] rounded-md  drop-shadow-md h-[340px]">
                <div className="search relative bg-white">
                  <input
                    spellCheck={false}
                    type="text"
                    placeholder="Search"
                    className="bg-white border-b-2 h-[40px] w-full focus:outline-none text-[15px] px-[20px] "
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                  />
                </div>
                <ul className="options  scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-hover:gray-300 bg-white w-full overflow-y-auto pr-[7px] mt-2">
                  {list.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          updateName2(item);
                          setSelectedCurrency(item);
                        }}
                        className={`h-[40px] mx-10 hover:rounded-[5px] font-roboto font-bold text-[16px] flex items-center justify-between cursor-pointer  ${
                          item === targetCurrency
                            ? "h-[40px] hover:rounded-[5px]"
                            : ""
                        }`}
                      >
                        {typeof popularCurrency === "string"
                          ? `${popularCurrency}  `
                          : null}
                        <img
                          src={logo2}
                          alt="logo2"
                          className="w-[14px] h-[16px] mx-6"
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <button
            className="border-2 mt-3 w-[210px] rounded-md border-red-500 mx-4 px-8 py-1 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500"
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
