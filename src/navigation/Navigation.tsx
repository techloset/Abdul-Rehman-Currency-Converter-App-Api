import { Route, Routes } from 'react-router-dom'
import Hero from "../page/Frontend/home/Home"
import ConrencyConvertList from '../page/Frontend/conrencyConvertList/ConrencyConvertList'
import Converter from '../page/Frontend/converter/Converter'

export default function Navigation() {
    return (
        <>

            <Routes>

                <Route path='/' element={<Hero />} />
                <Route path='/list' element={<ConrencyConvertList  />} />
                <Route path='/convert' element={<Converter  />} />

            </Routes>
        </>
    )
}
