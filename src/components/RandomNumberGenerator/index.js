import {React, useState} from 'react'
import './index.css'

function RandomNumberGenerator() {
  const [number, setNumber] = useState(0)

  const Generatenumber = () => {
    setNumber(Math.floor(Math.random() * 101))
  }

  return (
    <div className="bg-container">
      <div className="box">
        <h1>Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <button onClick={Generatenumber}>Generate</button>
        <p className="value">{number}</p>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
