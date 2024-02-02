import { Route, Routes } from 'react-router-dom'
import Home from "../page/Frontend/home/Home"
import CurrencyConvertList from '../page/Frontend/currencyConvertList/CurrencyConvertList'
import Converter from '../page/Frontend/converter/Converter'

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
