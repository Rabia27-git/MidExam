import React,{useState} from 'react'
import './index.css'

function CountdownLightSwitch() {
    const [timer,setTimer]=useState(0)
    const [progress,setProgress]=useState(10)
    const [theme,setTheme]=useState(true)
    let id;

    function handleTimer(){
        if(timer===30){
            clearInterval(id)
        }

        else{
            let progress=document.getElementsByClassName("progress-bar")[0]
            let div=document.createElement("div")
            div.style.width="10px";
            div.style.backgroundColor="green"
            div.style.display="inline"
            id=setInterval(()=>{
                setTimer(timer=>timer+1)
                setProgress(div.style.width+"10px")
            },1000)

        }
    }

    function handleResetTimer(){
        setTimer(0)
        clearInterval(id)
    }

    function handleToggle(){
        let container=document.getElementById("bigContainer")
        if(theme){
            container.class.remove("light")
            setTheme(false)
        }
        else{
            container.class.add("light")
            setTheme(true)
        }
    }

  return (
    <div className="container, light" id="bigContainer">
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle"/>
          <span className="slider" onClick={handleToggle}></span>
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
        <button id="resetButton" onClick={handleResetTimer}>Reset Timer</button>  
        {/* display none */}
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>
  )
}

export default CountdownLightSwitch