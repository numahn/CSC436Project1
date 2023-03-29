import { React, useState } from 'react';
import '../css/conversion.css';
import axios from 'axios';
export default function Conversion({ res, time }) {
	const [resArr, setResArr] = useState([
		{ code: res.USD.code, rate: res.USD.rate_float },
		{ code: res.GBP.code, rate: res.GBP.rate_float },
		{ code: res.EUR.code, rate: res.EUR.rate_float },
	]);
	const [flip, setFlip] = useState(true);

	const sortArray = () => {
		const clonedState = [...resArr];
		if (flip === true) {
			clonedState.sort((a, b) => a.rate - b.rate);
			setResArr(clonedState);
			setFlip(!flip);
		} else {
			clonedState.sort((a, b) => b.rate - a.rate);
			setResArr(clonedState);
			setFlip(!flip);
		}
	};

	const getData = () => {
		const lastCall = new Date();
		if (lastCall && lastCall - new Date(time.iso) < 5 * 60 * 1000) {
			//Compares the last call by the api call to see if it was 5 minutes ago
			alert('You must wait 5 minutes after each call.');
		} else {
			//call api again here and change resArr, maybe could reduce redundancy here
			axios
				.get('https://api.coindesk.com/v1/bpi/currentprice.json')
				.then((response) => {
					setResArr([
						{
							code: response.data.bpi.USD.code,
							rate: response.data.bpi.USD.rate_float,
						},
						{
							code: response.data.bpi.GBP.code,
							rate: response.data.bpi.GBP.rate_float,
						},
						{
							code: response.data.bpi.EUR.code,
							rate: response.data.bpi.EUR.rate_float,
						},
					]);
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<>
			<div className="conversion-container">
				<p className="title">1 BTC:</p>
				{resArr.map((rate, i) => {
					return (
						<div className="section" key={i}>
							{rate.rate.toFixed(2)} {rate.code} (1 {rate.code}:{' '}
							{(1 / rate.rate).toFixed(6)} BTC)
						</div>
					);
				})}
				<div className="buttons">
					<button
						type="button"
						className="flip button btn btn-primary"
						onClick={() => sortArray()}
					>
						Sort
					</button>
					<button
						type="button"
						className="button btn btn-success"
						onClick={() => getData()}
					>
						Get Data
					</button>
				</div>
			</div>
		</>
	);
}
