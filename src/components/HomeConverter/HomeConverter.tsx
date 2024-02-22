import useHome from "../../hooks/useHome";
import { useAppDispatch } from "../../store/storeHook";
import { updateTargetCurrency } from "../../store/reducer/converterReducer";
import logo from "../../assets/images/Vector.png";
import downArrow from "../../assets/images/caret-down.png";

export default function HomeConverter() {
  const dispatch = useAppDispatch();
  const {
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
    convertedAmount,
    sourceCurrency,
    targetCurrency,
    setConvertedAmount,
    handleConversion,
    symbols,
  } = useHome();

  const filteredCountryList = Object.entries(symbols ?? {}).filter(
    ([currencyCode, country]) =>
      currencyCode !== targetCurrency &&
      (currencyCode.toLowerCase().includes(searchWord.toLowerCase()) ||
        country.toLowerCase().includes(searchWord.toLowerCase()))
  );
  return (
    <div className="flex justify-center mx-3 ">
      <div className="flex flex-col justify-center p-3    shadow-custom w-full md:w-[900px] h-[auto] md:h-[321px] bg-white rounded-lg text-center mx-4 md:mx-auto">
        <h2 className="text-[20px] sm:text-[32px] font-bold font-roboto leading-10 sm:leading-[42px] ">
          Make fast and affordable <br />
          international business payments
        </h2>
        <p className="text-zinc-900 text-[16px] leading-6   font-normal font-roboto ">
          Send secure international business payments in
          <span className="text-[16px] font-bold font-roboto"> XX </span>
          currencies, all at competitive rates with no hidden fees.
        </p>

        <div className="flex  flex-col justify-between mx-10 md:flex-row items-center lg:flex-row ">
          <div className="relative w-[320px]  sm:w-[370px] flex flex-row    mt-2 rounded-sm   ">
            <div className="w-full  border-2">
              <div className="flex pl-4 w-[240px] flex-col text-start">
                <span className="font-roboto font-normal text-[16px]">
                  Amount
                </span>
                <input
                  type="number"
                  name="initialCurrency"
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  id="price"
                  className="ring-0 focus:outline-none font-bold  placeholder:text-[#1A1A1A] font-roboto text-[24px] text-[black]"
                  placeholder="0"
                />
              </div>
            </div>
            <div
              className={`wrapper flex w-fit border-2 absolute inset-y-0 right-0  px-6   ${
                isActive ? "active" : ""
              }`}
            >
              <div
                className="flex items-center cursor-pointer relative right-0"
                onClick={() => setIsActive(!isActive)}
              >
                <span className="font-roboto font-bold">
                  {sourceCurrency || ""}
                </span>
                <img src={downArrow} className="pl-3" alt="caret-down" />
              </div>
              <div className="content  absolute right-0 top-full hidden p-6 z-10 md:mt-0  bg-white sm:w-[370px] w-[320px]   max-h-[340px] overflow-y-auto pr-[7px] rounded-md   h-[340px]">
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
                <ul className="options   scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-hover:gray-300 bg-white w-full overflow-y-auto pr-[7px] mt-2">
                  {filteredCountryList.map(([currencyCode, country], index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => updateName(currencyCode)}
                        className={`h-[44px] w-[333px] mx-10 hover:rounded-[5px] flex items-center cursor-pointer  ${
                          currencyCode === sourceCurrency
                            ? "h-[40px] hover:rounded-[5px]"
                            : ""
                        }`}
                      >
                        <span className="font-bold text-[16px] text-black mr-3">{currencyCode}</span>
                        <span className="text-[13px] text-start w-40 text-black">{country}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={switchBtn}
            className="flex items-center mx-3 my-4 border-none"
          >
            <img src={logo} alt="logo" />
          </button>
          <div className="relative  w-[320px] sm:w-[370px] flex flex-row    mt-2 rounded-sm   ">
            <div className="w-full  border-2">
              <div className="flex pl-4 w-[240px] flex-col text-start">
                <span className="font-roboto font-normal text-[16px]">
                  Converted to
                </span>
                <input
                  type="number"
                  name="initialCurrency"
                  value={convertedAmount}
                  onChange={(e) => {
                    dispatch(updateTargetCurrency(e.target.value));
                    setConvertedAmount(0);
                  }}
                  id="price"
                  className="ring-0 focus:outline-none font-bold  placeholder:text-[#1A1A1A] font-roboto text-[24px] text-[black]"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div
              className={`wrapper flex w-fit border-2 absolute inset-y-0 right-0  px-6   ${
                isActive2 ? "active" : ""
              }`}
            >
              <div
                className="flex items-center cursor-pointer relative right-0"
                onClick={() => setIsActive2(!isActive2)}
              >
                <span className="font-roboto font-bold">
                  {targetCurrency || ""}
                </span>
                <img src={downArrow} className="pl-3" alt="caret-down" />
              </div>
              <div className="content absolute right-0 top-full hidden p-6  bg-white w-[320px] sm:w-[370px]  max-h-[340px] z-10  overflow-y-auto pr-[7px] rounded-md   h-[340px]">
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
                  {filteredCountryList.map(([currencyCode, country], index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => updateName2(currencyCode)}
                        className={`h-[44px] w-[333px] mx-10 hover:rounded-[5px] flex items-center cursor-pointer  ${
                          currencyCode === targetCurrency
                            ? "h-[40px] hover:rounded-[5px]"
                            : ""
                        }`}
                      >
                        <span className="text-[16px] text-black font-bold mr-3">{currencyCode}</span>
                        <span className="text-[13px] text-start w-40">{country}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-center  mx-10 my-7 md:flex-row md:justify-between lg:flex-row sm:flex-col lg:justify-between ">
          <span className="font-bold text-start  font-roboto leading-10  text-[16px]   md:py-3">
            1.00 {sourceCurrency} = {oneCurrency ? oneCurrency : 0} &nbsp;
            {targetCurrency}
          </span>
          <button
            onClick={handleConversion}
            className=" rounded-md w-[220px] sm:w-[370px] h-[46px]  px-16 py-2 md:w-80 md:aglin-center bg-primary   text-white font-bold hover:bg-white hover:text-primary border-2 border-primary "
          >
            {loading ? "Loading..." : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
}
