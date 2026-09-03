import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[form,setForm] = useState({})


  const btnclicked = ()=>{
    alert("Button Clicked")
  }
  const mouseover = ()=>{
    alert("Mouse Over")
  }
  const progress =()=>{
    alert("Processing")
  }

  const handleInputChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <button onClick={btnclicked}>Click me </button>

      <button onMouseOver={mouseover}>Mouse Over</button>

      <div className="red"onProgress={progress}>Processing</div>
      <input type="text" name="email" value={form.email?form.email:''} onChange={handleInputChange} />
      <br />
      <input type="text" name='phone' value={form.phone? form.phone:" "} onChange={handleInputChange} />

    </>
  )
}

export default App