// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerationButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-image"
            alt="speedometer"
          />
          <h1 className="speed-text">speed is {speed}Mph</h1>
          <p className="speed-limits">Min Limit is 0Mph,Max Limit is 200Mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button button"
              onClick={this.onClickAccelerationButton}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="apply-brake-button button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
