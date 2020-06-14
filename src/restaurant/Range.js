import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { FaRupeeSign } from "react-icons/fa";
class Range extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 100
    }
  } 
  handleChange = value => {
    this.setState({
      value: value
    },()=>{this.props.handleRange(value)})
  };
  render () {
    const { value } = this.state
    return (
      <div>
      <div style ={{fontWeight:"bold",fontSize:16,marginTop:40}}className='value'>Select Price Range from 100 <FaRupeeSign/>to {value}<FaRupeeSign/></div>
      <div className='slider' style={{marginLeft:'50px',width:'200px'}}>
      <Slider 
          min={100}
          max={800}
          value={value}
          onChange={this.handleChange}  />
        </div> 
      </div>
    )
  }
}
export default Range