import { Route, Routes } from 'react-router-dom'
import Home from "../page/frontend/home/Home"
import ConrencyConvertList from '../page/frontend/conrencyConvertList/ConrencyConvertList'
import Converter from '../page/frontend/converter/Converter'

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
