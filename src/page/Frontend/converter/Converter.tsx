import UseConverter from "../../../hooks/UseConverter"
import { updateSourceCurrency, updateTargetCurrency } from "../../../store/reducer/ConverterReducer";
import { useAppDispatch } from "../../../store/storeHook";
import logo from "../../../assets/images/Vector.png";


export default function Converter() {

    const dispatch = useAppDispatch();

    const {
        setAmount,
        oneCurrency,
        convertedAmount,
        sourceCurrency,
        targetCurrency,
        setConvertedAmount,
        handleConversion,
        countrySymbols,
    } = UseConverter()

    return (
        <div className="mb-28">
            <div className="text-center mb-20 bg-blue-50 h-96">
                <div className="my-20">
                    <h1 className="text-6xl  font-bold  font-['Roboto'] leading-[100px] text-zinc-900"> Currency Converter</h1>
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
                            Send secure international business payments in XX currencies,
                            all at competitive rates with no hidden fees.
                        </p>

                        <div className="flex  flex-col justify-between mx-10 md:flex-row lg:flex-row ">

                            <div className="relative mt-2 rounded-sm shadow-sm  ">
                                <input
                                    type="number"
                                    name="initialCurrency"
                                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                                    id="price"
                                    className="remove-arrow block w-full  focus:outline-none focus:ring   border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 "
                                    placeholder="0.00"
                                />
                                <div className="absolute rounded-sm inset-y-0 right-0 flex items-center">
                                    <select
                                        onChange={(e) => {
                                            dispatch(updateSourceCurrency(e.target.value));
                                        }}
                                        value={sourceCurrency}
                                        id="currency"
                                        name="currency"
                                        className="h-full focus:outline-none  rounded-sm w-24  border-x-2 bg-transparent py-0 pl-2 pr-7 text-gray-500   sm:text-sm">
                                        {Object.entries(countrySymbols).map(
                                            ([currencyCode, currencyname]) => {
                                                if (currencyCode !== targetCurrency) {
                                                    return (
                                                        <option key={currencyCode} value={currencyCode}>
                                                            {currencyCode} &nbsp; &nbsp;
                                                            {currencyname}
                                                        </option>
                                                    );
                                                }
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>

                            <span className="flex items-center mx-3">
                                <img src={logo} />
                            </span>

                            <div className="relative mt-2 rounded-sm shadow-sm ">
                                <input
                                    type="number"
                                    name="price"
                                    value={convertedAmount}
                                    id="price"
                                    className="block w-full focus:outline-none   border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                    placeholder="0.00"
                                    disabled
                                />
                                <div className="absolute rounded-sm inset-y-0 right-0 flex items-center">
                                    <label htmlFor="currency" className="sr-only">
                                        Currency
                                    </label>
                                    <div>
                                    </div>
                                    <select
                                        id="currency"
                                        name="currency"
                                        value={targetCurrency}
                                        onChange={(e) => {
                                            dispatch(updateTargetCurrency(e.target.value));
                                            setConvertedAmount(0);
                                        }}
                                        className="h-full rounded-sm focus:outline-none w-24 border-x-2 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
                                    >
                                        {Object.entries(countrySymbols).map(
                                            ([currencyCode, currencyname]) => {
                                                if (currencyCode !== sourceCurrency) {
                                                    return (
                                                        <option key={currencyCode} value={currencyCode}>
                                                            {currencyCode}  &nbsp; &nbsp;
                                                            {currencyname}
                                                        </option>
                                                    );
                                                }
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  justify-center  mx-10 my-7 md:flex-row md:justify-between lg:flex-row sm:flex-col lg:justify-between ">
                            <span className="font-bold  text-[12px] sm:text-[30]  md:py-3">
                                1.00  {sourceCurrency} = 
                                {oneCurrency ? oneCurrency : 0} &nbsp;
                                {targetCurrency}
                            </span>
                            <button
                                onClick={handleConversion}
                                className="border-2 rounded-md border-red-500 px-16 py-2 md:w-80 md:aglin-center  bg-red-500 text-white font-bold hover:bg-white hover:text-red-500"

                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
