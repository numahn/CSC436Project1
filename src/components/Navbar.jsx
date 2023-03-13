// import React, { useState } from 'react'
// import '../css/navbar.css'
// import Button from './Button'

// export default function Navbar({res}) {
//     const [curr, setCurr] = useState()
//     const [value, setValue] = useState("")

//     const onSubmit = (e) => {
//         e.preventDefault()

//         setValue(e.target[0].value)
//         setCurr(document.getElementById('currency').value)
//         console.log(value, curr)
//         const area = document.getElementById("output")
//         switch(curr){
//             case "USD":
//                 area.innerHTML = "Conversion: " + (value/ res.USD.rate_float).toFixed(9)
//                 break
//             case "GBP":
//                 area.innerHTML = "Conversion: " + (value/ res.GBP.rate_float).toFixed(9)
//                 break
//             case "EUR":
//                 area.innerHTML = "Conversion: " + (value/ res.EUR.rate_float).toFixed(9)
//                 break
//         }
//     }
//     return (
//         <>
//             <div className="navbar">
//                 <p className="conversion section">1 BTC:</p>
//                 <div className="dollar-rate section">
//                     ${res.USD.rate}  
//                     {/* Could use code, symbol, description and more here and for the other two, but symbol is easier */}
//                 </div>
//                 <div className="pound-rate section">
//                     £{res.GBP.rate}
//                 </div>
//                 <div className="euro-rate section">
//                     €{res.EUR.rate}
//                 </div>
//                 <div>
//                     <Button text="click me!"></Button>
//                 </div>
//                 <div className="usd-conversion section">1 USD to BTC: {(1/ res.USD.rate_float).toFixed(9)} </div>
//                 <div className="gbp-conversion section">1 GBP to BTC: {(1/ res.GBP.rate_float).toFixed(9)} </div>
//                 <div className="eur-conversion section">1 EUR to BTC: {(1/ res.EUR.rate_float).toFixed(9)} </div>
//                 <form id="currFrom" onSubmit={e => onSubmit(e)}>
//                     <label for="amount">Amount</label>
//                     <input name="amount"></input>
//                     <input type="submit"></input>
//                 </form>
//                 <select id="currency" form="currForm" name="currList">
//                     <option value="USD">USD</option>
//                     <option value="GBP">GBP</option>
//                     <option value="EUR">EUR</option>
//                 </select>
//             </div>
//         </>
//     )
// }

//New

import React, { useState, useEffect } from 'react'
import "../css/navbar.css"
import Conversion from './Conversion'
import CustomConversion from './CustomConversion'
export default function Navbar({res, time}) {

    const [section, setSection] = useState(true)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" onClick={() => setSection(true)}>Current BTC Rates</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active" onClick={() => setSection(false)}>Custom Conversions</a>
                            </li>
                            <li className="nav-item time">
                                <a className="nav-link">Time: {time.regular}</a>
                                <a className="nav-link">Local: {new Date(time.regular).toString()}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {section ? <Conversion res={res} time={time}/>:
            <CustomConversion res={res}/>
            }
        </>
        
    )
}
