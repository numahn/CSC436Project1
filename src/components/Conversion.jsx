import {React, useEffect, useState } from 'react'
import "../css/conversion.css"

export default function Conversion({res}) {
    const [resArr, setResArr] = useState([{code: res.USD.code, rate: res.USD.rate_float},
        {code: res.GBP.code, rate: res.GBP.rate_float},
        {code: res.EUR.code, rate: res.EUR.rate_float}])
    const [flip, setFlip] = useState(true)
    const sortArray = () => {
        const clonedState = [...resArr]
        if(flip === true){
            clonedState.sort((a, b) => a.rate - b.rate)
            setResArr(clonedState)
            setFlip(!flip)
        }
        else{
            clonedState.sort((a, b) => b.rate - a.rate)
            setResArr(clonedState)
            setFlip(!flip)
        }
    }
    return (
        <>
            <div className="conversion-container">
                <p className="title">1 BTC:</p>
                {resArr.map(rate => {
                    return(
                        <div className="section">{rate.rate.toFixed(2)} {rate.code} ({(1/rate.rate).toFixed(6)} BTC)</div>
                    )
                })}
                <button type="button" class="flip-button btn btn-primary" onClick={() => sortArray()}>Sort</button>
            </div>
        </>
    )
}
