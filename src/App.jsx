import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

function App() {

  const [res, setRes] = useState()
  const [time, setTime] = useState("")

  const getData = async () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
      setRes(response.data.bpi)
      setTime(response.data.time.updated)
    }).catch((err) => {
      console.log(err)
    })
  }
 
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      
      {res? <Navbar res={res} time={time}/> : null}
      <br></br>
      {/* <div className="time-zone">
        <p>Time: {time}</p>
        <p>Local: {new Date(time).toString()}</p>
      </div> */}
    </>
  )
}

export default App
