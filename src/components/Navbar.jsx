import React from 'react'
import '../css/navbar.css'

export default function Navbar({res}) {
    
    return (
        <>
            <div className="navbar">
                <p className="conversion section">1 BTC:</p>
                <div className="dollar-rate section">
                    ${res.USD.rate}
                </div>
                <div className="pound-rate section">
                    £{res.GBP.rate}
                </div>
                <div className="euro-rate section">
                    €{res.EUR.rate}
                </div>
                {console.log(typeof(res.USD.rate))}
                <div className="usd-conversion section">1 USD to BTC: {(1/ parseFloat(res.USD.rate)).toFixed(5)} </div>
                
            </div>
        </>
    )
}
