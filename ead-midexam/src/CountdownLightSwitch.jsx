import React from 'react'
import './index.css'

function CountdownLightSwitch() {
  return (
    <div className="container">
    <div className="header">
      <h1>Countdown & Light Switch</h1>
      <div className="toggle-container">
        <label className="toggle-switch">
          <input type="checkbox" id="themeToggle" />
          <span className="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <div className="timer-section">
      <div className="progress-bar">
        <div className="progress" id="progress"></div>
      </div>
      <div className="timer" id="timerDisplay">30s</div>
      <div className="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton">Reset Timer</button>  
        {/* display none */}
      </div>
      <div className="message" id="messageArea"></div>
    </div>
  </div>
  )
}

export default CountdownLightSwitch