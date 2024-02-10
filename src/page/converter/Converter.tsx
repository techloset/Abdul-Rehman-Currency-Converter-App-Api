import useConverter from "../../hooks/useConverter";
import { updateTargetCurrency } from "../../store/reducer/ConverterReducer";
import { useAppDispatch } from "../../store/storeHook";
import logo from "../../assets/images/Vector.png";

export default function Converter() {
  const dispatch = useAppDispatch();

  const {
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
    convertedAmount,
    sourceCurrency,
    targetCurrency,
    setConvertedAmount,
    handleConversion,
    exchangeRates,
    loading,
    symbols
  } = useConverter();

  console.log("oneCurrency", oneCurrency);

  const filteredCountryList = Object.entries(symbols ?? {}).filter(
    ([currencyCode, country]) =>
      currencyCode !== targetCurrency &&
      (currencyCode.toLowerCase().includes(searchWord.toLowerCase()) ||
        country.toLowerCase().includes(searchWord.toLowerCase()))
  );

  return (
    <div className="mb-28">
      <div className="text-center mb-20 bg-blue-50 h-96">
        <div className="my-20">
          <h1 className="text-6xl  font-bold  font-['Roboto'] leading-[100px] text-zinc-900">
            {" "}
            Currency Converter
          </h1>
          <p className="text-base font-normal font-['Roboto'] leading-[42px]">
            Need to make an international business payment? Take a look at our
            live foreign exchange rates.
          </p>
        </div>
        <div className="flex m-3  justify-center">
          <div className=" p-8 border-2  drop-shadow-lg w-[900px]  md:w-[850px] h-[375px] md:h-[321px] bg-white rounded-lg shadow text-center">
            <h2 className="text-[20px] sm:text-[32px] font-bold font-['Roboto'] leading-[24px] sm:leading-[42px] ">
              Make fast and affordable <br />
              international business payments
            </h2>
            <p className="text-zinc-900 text-base font-normal font-['Roboto'] leading-base">
              Send secure international business payments in XX currencies, all
              at competitive rates with no hidden fees.
            </p>

            <div className="flex  flex-col justify-between mx-10 md:flex-row lg:flex-row ">
              <div className="relative w-[300px]  mt-2 rounded-sm shadow-sm  ">
                <input
                  type="number"
                  name="initialCurrency"
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  id="price"
                  className="remove-arrow block w-full  focus:outline-none focus:ring   border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 "
                  placeholder="0.00"
                />
                <div
                  className={`wrapper border-2 flex w-fit absolute inset-y-0 right-0  px-6   ${
                    isActive ? "active" : ""
                  }`}
                >
                  <div
                    className="select-btn relative right-0 "
                    onClick={() => setIsActive(!isActive)}
                  >
                    <span>{sourceCurrency || ""}</span>
                  </div>
                  <div className="content  absolute right-0 top-full hidden p-6 mt-[60px] md:mt-0  bg-white w-[300px]  max-h-[340px] overflow-y-auto pr-[7px] rounded-md  drop-shadow-md h-[340px]">
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
                      <ul className="options overflow-y-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-hover:gray-300 bg-white w-full overflow-y-auto pr-[7px] mt-2">
                        {filteredCountryList.map(
                          ([currencyCode, country], index) => {
                            return (
                              <li
                                key={index}
                                onClick={() => updateName(currencyCode)}
                                className={
                                  currencyCode === sourceCurrency
                                    ? "selected"
                                    : ""
                                }
                              >
                                <span className="font-bold mr-3">
                                  {currencyCode}
                                </span>
                                <span className="text-[13px] w-40">
                                  {country}
                                </span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                </div>
              </div>

              <button
                onClick={switchBtn}
                className="flex items-center mx-3 border-none"
              >
                <img src={logo} alt="logo" />
              </button>

              <div className="relative w-[300px]  mt-2 rounded-sm shadow-sm  ">
                <input
                  type="number"
                  name="initialCurrency"
                  value={convertedAmount}
                  onChange={(e) => {
                    dispatch(updateTargetCurrency(e.target.value));
                    setConvertedAmount(0);
                  }}
                  id="price"
                  className="remove-arrow block w-full  focus:outline-none focus:ring   border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 "
                  placeholder="0.00"
                />
                <div
                  className={`wrapper border-2 flex w-fit absolute inset-y-0 right-0  px-6   ${
                    isActive2 ? "active" : ""
                  }`}
                >
                  <div
                    className="select-btn relative right-0"
                    onClick={() => setIsActive2(!isActive2)}
                  >
                    <span>{targetCurrency || ""}</span>
                  </div>
                  <div className="content absolute right-0 top-full hidden p-6  bg-white w-[300px] mt-[10px] max-h-[340px]  overflow-y-auto pr-[7px] rounded-md  drop-shadow-md h-[340px]">
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
                      <ul className="options overflow-y-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-hover:gray-300 bg-white w-full overflow-y-auto pr-[7px] mt-2">
                        {filteredCountryList.map(
                          ([currencyCode, country], index) => {
                            return (
                              <li
                                key={index}
                                onClick={() => updateName2(currencyCode)}
                                className={
                                  currencyCode === targetCurrency
                                    ? "selected"
                                    : ""
                                }
                              >
                                <span className="font-bold mr-3">
                                  {currencyCode}
                                </span>
                                <span className="text-[13px] w-40">
                                  {country}
                                </span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  justify-center  mx-10 my-7 md:flex-row md:justify-between lg:flex-row sm:flex-col lg:justify-between ">
              <span className="font-bold  text-[12px] sm:text-[30]  md:py-3">
                1.00 {sourceCurrency} ={oneCurrency ? oneCurrency : 0} &nbsp;
                {targetCurrency}
              </span>
              <button
                onClick={handleConversion}
                className="border-2 rounded-md border-red-500 px-16 py-2 md:w-80 md:aglin-center  bg-red-500 text-white font-bold hover:bg-white hover:text-red-500"
              >
                {loading ? "Loading..." : "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
