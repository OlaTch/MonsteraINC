import React, { Component } from 'react'
import './MonsteraImageStyle.css'

export class MonsteraImage extends Component {
  render() {
    return (
      <div className='monstera-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
        
      </div>
    )
  }
}

export default MonsteraImage