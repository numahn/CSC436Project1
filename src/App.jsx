import { React, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
function App() {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
      const data = response.data
      const bpi = data.bpi
      console.log(bpi)
    }).catch((err) => {
      console.log(err)
    })
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
