import React, { useState } from 'react';
import '../css/customConversion.css';
export default function CustomConversion({ res }) {
	const [curr, setCurr] = useState('');
	const [value, setValue] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		//take forms value and also dropdowns value, as they are separated (probably another way to do this)
		let inputValue = e.target[0].value;
		let inputCurr = document.getElementById('currency').value;
		const area = document.getElementsByClassName('output')[0];
		setValue(inputValue);
		setCurr(inputCurr);
		switch (inputCurr) {
			//Change innerHTML of output
			case 'USD':
				area.innerHTML =
					'Conversion: ' + (inputValue / res.USD.rate_float).toFixed(9) + ' BTC';
				break;
			case 'GBP':
				area.innerHTML =
					'Conversion: ' + (inputValue / res.GBP.rate_float).toFixed(9) + ' BTC';
				break;
			case 'EUR':
				area.innerHTML =
					'Conversion: ' + (inputValue / res.EUR.rate_float).toFixed(9) + ' BTC';
				break;
		}
	};

	return (
		<>
			<div className="container">
				<div className="user-input">
					Amount:
					<select id="currency" form="currForm" name="currList">
						<option value="USD">USD</option>
						<option value="GBP">GBP</option>
						<option value="EUR">EUR</option>
					</select>
					<form id="currFrom" onSubmit={(e) => onSubmit(e)}>
						<label htmlFor="amount"></label>
						<input name="amount"></input>
						<input type="submit"></input>
					</form>
				</div>
				<div className="output">Output: </div>
			</div>
		</>
	);
}
