import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="counter">{count}</span> Mangoes
            <span className="counter">{count}</span> Bananas
          </h1>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onIncrement}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.onIncrease}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
