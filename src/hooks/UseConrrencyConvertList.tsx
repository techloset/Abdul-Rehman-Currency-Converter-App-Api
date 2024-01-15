import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/storeHook';
import {  handleSelectedCurrency } from '../store/reducer/ConverterReducer';
import { useLocation } from 'react-router-dom';


export default function UseCurrencyConvertList() {


    const location = useLocation();
    const dispatch = useAppDispatch();
    const currencyTo = useAppSelector((state) => state.selectedCurreny);



    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const selectedCurrency = searchParams.get('currency');
        if (selectedCurrency) {
            dispatch(handleSelectedCurrency(selectedCurrency));
        }
    }, [dispatch, location.search]);


    

    return [ currencyTo];
}
