import React, { Component } from 'react'
export default class Sort extends Component {
    render() {
        return (
            <div >
               <label > <div className="labelfilter">Filter by Category </div>
               <select className ="select" value={this.props.sort} onChange={this.props.handleSort}>
                   <option value="all">All</option>
                   <option value="south-indian">South Indian</option>
                   <option value="Chinese">Chinese</option>
                   <option value="thai">Thai</option>
                   <option value="north-indian">North-Indian</option>
                   <option value="arabian">Arabian</option>
                   <option value="hyderabadi">Hyderabadi</option>
               </select>
               </label>
            </div>
        )
    }
}
