import React from 'react'
import "../css/button.css"
export default function Button({text}) {
    return (
        <>
            <button className="button">{text}</button>
        </>
    )
}
