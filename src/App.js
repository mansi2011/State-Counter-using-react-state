import React,{useState}from 'react'
import "./App.css";


function App(){

  //defining state variable = Var
  //setVar will update the Var value need to provide beside Var separated by comma
  //useState(put initial or deafult value of any data type)
  const [count, setCount] = useState(true)

  return (
    <div className="App">
      <header>
        <h1>Counter app using State/Hooks</h1>
      </header>
      <h2>Current value of count is : {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => count >= 10 ? "" : setCount(count+1)}>Increase Counter</button>
      <button onClick={() => count <= 0 ? "" : setCount(count-1)}>Decrease Counter</button>
    </div>
  )
}

export default App;