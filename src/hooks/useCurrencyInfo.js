import {useState} from 'react'


function useCurrencyInfo({currency}){
    const [data,setData]=useState({})
   const currencyInfo= fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
   currencyInfo.then((res)=>res.json())
   .then((cur)=>setData(cur[currency]))
   return data;
}

export default useCurrencyInfo;
