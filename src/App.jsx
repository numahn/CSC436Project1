import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

function App() {

  const [res, setRes] = useState()
  const [time, setTime] = useState({}) //obj for both regular time and ISO time to convert/compare

  //Call api
  const getData = async () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
      setRes(response.data.bpi)
      setTime({regular: response.data.time.updated, iso: response.data.time.updatedISO})
    }).catch((err) => {
      console.log(err)
    })
  }
 
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      {/*Ternary operator to wait for res to load before component loads*/}
      {res? <Navbar res={res} time={time}/> : null}
    </>
  )
}

export default App
