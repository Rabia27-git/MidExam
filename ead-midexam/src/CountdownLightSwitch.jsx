import React,{useState} from 'react'
import './index.css'

function CountdownLightSwitch() {
    const [timer,setTimer]=useState(0)

    function handleTimer(){
        setInterval(()=>{
            setTimer(timer+1)
        },1000)
    }

  return (
    <div className="container">
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle"/>
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">{timer}</div>
      <div className="btn-group">
        <button id="startButton" onClick={handleTimer}>Start Timer</button>
        <button id="resetButton">Reset Timer</button>  
        {/* display none */}
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>
  )
}

export default CountdownLightSwitch