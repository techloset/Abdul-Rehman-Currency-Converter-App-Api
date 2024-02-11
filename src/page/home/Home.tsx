import useHome from "../../hooks/useHome";
import HomeConverter from "./HomeConverter";

export default function Home() {

  const {
    handleDropDown,
    setSelectedCurrency,
  } = useHome();



  return (
    <>
      <div className="mb-28">
        <div className="text-center mb-20 bg-blue-50 h-96">
          <div className="my-20">
            <h1 className="text-6xl  font-bold  font-Roboto leading-[100px] text-zinc-900">
              {" "}
              Currency Converter
            </h1>
            <p className="text-base font-normal font-Roboto leading-[42px]">
              Need to make an international business payment? Take a look at our
              live foreign exchange rates.
            </p>
          </div>
          <HomeConverter />
          
        </div>
      </div>
      <div className="mt-96">
        <div className="w-10/12 m-8 md:w-6/12 sm:mx-32 sm:w-4/12">
          <h1 className="text-3xl font-bold py-5">Let Save You Some Time</h1>
          <p className="py-3">
            If you’ve got a target exchange rate in mind but haven’t got time to
            keep tabs on market movement, then a firm order could be perfect for
            you. When your chosen rate is reached, we’ll act immediately,
            leaving you free to concentrate on your business.
          </p>
          <button className="border-2 rounded-md border-red-500 px-8 py-2 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500">
            Find More
          </button>

          <button></button>
        </div>
      </div>

      <div className=" flex flex-col text-center   bg-sky-200 h-[343px] mt-32 p-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold py-2">Popular Currency</h1>
        </div>
        <div className="flex flex-col text-center items-center justify-center    sm:flex-row  mt-3">
          <select
            className="w-10/12 sm:w-4/12  h-10 rounded-md mt-3 p-1 border-2 text-gray-400 focus:outline-none "
            onChange={(e) => {
              setSelectedCurrency(e.target.value);
            }}
          >
            <option value="">select Currency</option>
            <option value="USD">USD United States</option>
            <option value="EUR">EUR Europe</option>
            <option value="JPY">JPY JAPAN</option>
            <option value="KWD">KWD Kuwait</option>
            <option value="BHD">BHD Bahrain</option>
            <option value="OMR">OMR Oman</option>
            <option value="JOD">JOD Jordan</option>
          </select>
          <button
            onClick={handleDropDown}
            className="border-2 mt-3 w-4/12 sm:w-2/12 rounded-md border-red-500 mx-4 px-8 py-1 bg-red-500 text-white font-bold hover:bg-white hover:text-red-500"
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
}
