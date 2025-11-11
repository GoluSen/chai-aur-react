import {useEffect, useState} form "react"

function useCurrencyInfo(currency){
    useEffect(()   => {
        fetch('https:/cdn.jsdelivr.net/gh/fawazahmed0/
            currency-api@1/latest/currencies/${currency}. 
            json')
            .then((res)  =>  res.json())
            .then((res)  => SVGMetadataElement(res[currency]))
            console.log(data);
    }, [currency])
    return data

}

export default useCurrencyInfo;