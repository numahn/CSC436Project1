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
            {/*One section would appear, depending on which you click on*/}
            {section ? <Conversion res={res} time={time}/>:
            <CustomConversion res={res}/>
            }
        </>
        
    )
}
