import { Route, Routes } from 'react-router-dom'
import Home from "../page/home/Home"
import CurrencyConvertList from '../page/currencyConvertList/CurrencyConvertList'
import Converter from '../page/converter/Converter'

export default function Navigation() {
    return (
        <>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/list' element={<CurrencyConvertList  />} />
                <Route path='/convert' element={<Converter  />} />

            </Routes>
        </>
    )
}
