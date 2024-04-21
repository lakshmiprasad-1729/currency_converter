import {useEffect, useState} from 'react'


function useCurrencyInfo({currency}){
    const [data,setData]=useState({})
   useEffect(()=>{
    const currencyInfo= fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    currencyInfo.then((res)=>res.json())
    .then((cur)=>setData(cur[currency]))
    return data;
   },[currency]);
}

export default useCurrencyInfo;
