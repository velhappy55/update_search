import React, { Component } from 'react'
import { FaCity } from "react-icons/fa";
export default class City extends Component {
    render() {
        return (
            <div >
               <label > <div className="label"><FaCity className="icon"/>&nbsp;Select the City</div>
               <select className="city" value={this.props.city} onChange={this.props.handleCity}>
                     <option value="">Select</option>
                   <option value="chennai">Chennai</option>
                   <option value="trichy">Trichy</option>
                   <option value="coimbatore">Coimbatore</option>
                   <option value="madurai">Madurai</option>
                   <option value="tanjore">Tanjore</option>
               </select>
               </label>
            </div>
        )
    }
}
