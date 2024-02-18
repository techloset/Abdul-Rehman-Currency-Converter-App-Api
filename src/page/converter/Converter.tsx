import HomeConverter from "../../components/HomeConverter/HomeConverter";
import { useAppSelector } from "../../store/storeHook";

export default function Converter() {

  const { sourceCurrency, targetCurrency } = useAppSelector((state) => state);

  return (
    <div className="mb-28">
        <div className="text-center mb-20 bg-blue-50 h-96">
          <div className="my-[96px]">
            <h1 className="text-[60px]   font-bold  font-roboto leading-[100px] text-[#1A1A1A]">
               Convert to {sourceCurrency} to {targetCurrency},
            </h1>
            <p className="text-[16px] font-normal font-roboto leading-[42px]">
              Need to make an international business payment? Take a look at our
              live foreign exchange rates.
            </p>
          </div>
          <HomeConverter />
        </div>
      </div>
    
  );
}
