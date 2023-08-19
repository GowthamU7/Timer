import Pause from "./pause"
import Timer from "./timer"

import './App.css'

import { useState } from "react"

function App(){

  const [time,setTime] = useState({min:0,sec:0})
  const [seconds,setSeconds] = useState(0)
  const [pause,setPause] = useState(true)

  function handleInput(e){
    let id = e.target.id
    let vl = e.target.value
    setTime((p)=>{ return {...p,[id]:parseInt(vl)}})
  }

  function startTimer(){
    let total_sec = seconds === 0? time.min*60+time.sec:seconds
    setSeconds(total_sec)
    setTime({min:0,sec:0})
    setPause(false)

  }

  function pauseTimer(){
    setPause(true)
  }

  function resetTimer(){
    setTime({min:0,sec:0})
    setSeconds(0)
    setPause(true)
  }

  return <div className="app">
    <div>
    <div className="timer">
        <h1>{!pause?<Timer props={{seconds,setSeconds,setPause}}/>:<Pause props={{seconds}}/>}</h1>
    </div>
    <div>
      <input 
      id="min" 
      onChange={handleInput} 
      value={time.min?time.min:""}
      placeholder="minutes"
      />
      <input
      id="sec" 
      onChange={handleInput} 
      value={time.sec?time.sec:""}
      placeholder="seconds"
      />
    </div>
    <div className="buttons">
        <button onClick={startTimer}>START</button>
        <button onClick={pauseTimer}>PAUSE</button>
        <button onClick={resetTimer}>RESET</button>
    </div>
    </div>
  </div>
}

export default App