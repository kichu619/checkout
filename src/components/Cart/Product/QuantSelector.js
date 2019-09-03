import React, { Component } from 'react'

class QuantSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.getInitialValue(props.initialValue)
    }
  }

  getInitialValue(value) {
    return parseInt(value, 0)
  }

  decrementHandler = () => {
    const { min } = this.props
    if (min && this.state.value === min) return
    this.setState(
      state => {
        return { value: state.value - 1 }
      },
      () => {
        this.props.onChange(this.state.value)
      }
    )
  }

  incrementHandler = () => {
    const { max } = this.props
    if (max && this.state.value > max) return
    this.setState(
      state => {
        return { value: state.value + 1 }
      },
      () => {
        this.props.onChange(this.state.value)
      }
    )
  }

  changeHandler = e => {
    const { value } = e.target
    const intValue = parseInt(value) 
    this.setState(
      state => {
        return { value: intValue}
      },
      () => {
        this.props.onChange(this.state.value)
      }
    )
  }

  render() {
    const { min } = this.props
    const {value} = this.state
    return (
      <div className="product__quantity">
        <button className="product__quantity__button" onClick={this.decrementHandler}>-</button>
        <input
          className="product__quantity__input"
          type="number"
          onChange={this.changeHandler}
          value={value || ''}
          min={min}
        />
        <button className="product__quantity__button" onClick={this.incrementHandler}>+</button>
      </div>
    )
  }
  
}

export default QuantSelector
