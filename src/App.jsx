import { React, useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
function App() {

  const [res, setRes] = useState()
  const getData = async () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
      setRes(response.data.bpi)
    }).catch((err) => {
      console.log(err)
    })
  }
 
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      {res? <Navbar res={res}/> : null}
    </>
  )
}

export default App
