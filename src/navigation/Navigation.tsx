import { Route, Routes } from 'react-router-dom'
import Home from "../page/Frontend/home/Home"
import ConrencyConvertList from '../page/Frontend/conrencyConvertList/ConrencyConvertList'
import Converter from '../page/Frontend/converter/Converter'

export default function Navigation() {
    return (
        <>

            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/list' element={<ConrencyConvertList  />} />
                <Route path='/convert' element={<Converter  />} />

            </Routes>
        </>
    )
}
