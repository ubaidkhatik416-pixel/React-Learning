import { useState } from "react"

function Section() {
  const [first, setfirst] = useState(0)

  const Increment = () => {
    setfirst(first + 1)
  }

  const Decrement = () => {
    setfirst(first - 1)
  }

   const Reset = () => {
    setfirst(0)
  }

  return (
    <div className="container">
        <h1>  {first}</h1>   <br />
      <button style={{width:50}} className="btn1" onClick={Increment}>
    +
      </button ><br />

       <button  style={{width:50}} className="btn1" onClick={Decrement}>
    -
      </button>
      <br />

       <button  style={{width:50}} className="btn1" onClick={Reset}>
    Reset
      </button>
    </div>
  )
}

export default Section