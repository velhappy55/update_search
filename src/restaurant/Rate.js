import React, { Component } from 'react'

export default class Rate extends Component {
    render() {
        return (
            <div >
            <label> <div className="labelfilter">Order by Rating  </div>
            <select className="select" value={this.props.rate} onChange={(e)=>this.props.handleRate(e)}>
                 <option value="low">High to low</option>
                <option value="high">Low to High</option>  
            </select>
            </label>
         </div>
        )
    }
}
