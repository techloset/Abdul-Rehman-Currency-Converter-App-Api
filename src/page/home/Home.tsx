import useHome from "../../hooks/useHome";
import HomeConverter from "../../components/HomeConverter/HomeConverter";

export default function Home() {
  const { handleDropDown, setSelectedCurrency } = useHome();

  return (
    <>
      <div className="mb-28">
        <div className="text-center mb-20 bg-blue-50 h-96">
          <div className="my-[96px]">
            <h1 className="text-[32px] sm:text-[60px]  font-bold  font-roboto leading-[100px] text-[#1A1A1A]">
              Currency Converter
            </h1>
            <p className="text-[16px] font-normal font-roboto leading-[24px] sm:leading-[42px]">
              Need to make an international business payment? Take a look at our
              live foreign exchange rates.
            </p>
          </div>
          <HomeConverter />
        </div>
      </div>
      <div className=" mt-[400px] md:ml-[228px]">
        <div className="max-w-[544px] m-8 ">
          <h1 className="text-3xl font-bold py-5">Let Save You Some Time</h1>
          <p className="py-3">
            If you’ve got a target exchange rate in mind but haven’t got time to
            keep tabs on market movement, then a firm order could be perfect for
            you. When your chosen rate is reached, we’ll act immediately,
            leaving you free to concentrate on your business.
          </p>
          <button className="border-2 rounded-md border-[#E5133A] px-8 py-2 bg-[#E5133A] text-white font-bold hover:bg-white hover:text-red-500">
            Find More
          </button>
          <button></button>
        </div>
      </div>
      <div className="flex flex-col text-center bg-currency-background bg-cover bg-[#F0F5FF] h-[343px] mt-32 p-12">
        <div className="text-center">
          <h1 className="text-[32px] leading-[42px]  font-bold py-2">
            Popular currencies
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row mt-3">
          <select
            className="w-full sm:w-4/12 h-[44px] sm:h-[auto] rounded-md mt-3 placeholder:text-black p-1 border-2 text-gray-400 focus:outline-none"
            onChange={(e) => {
              setSelectedCurrency(e.target.value);
            }}
          >
            <option value="">select Currency</option>
            <li value="USD">USD United States</li>
            <option value="EUR">EUR Europe</option>
            <option value="JPY">JPY JAPAN</option>
            <option value="KWD">KWD Kuwait</option>
            <option value="BHD">BHD Bahrain</option>
            <option value="OMR">OMR Oman</option>
            <option value="JOD">JOD Jordan</option>
          </select>
          <button
            onClick={handleDropDown}
            className="border-2 mt-3 w-full sm:w-2/12 h-[46px] rounded-md border-primary mx-0 sm:mx-4 px-8 py-1 bg-primary text-white font-bold hover:bg-white hover:text-primary"
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
}
