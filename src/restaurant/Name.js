import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        return (
            <div >
               <label className="label" > <div>Search</div>
               <input className="search" type="text" value={this.props.name} onChange={this.props.handleName} placeholder="search"/>
               </label> 
                  <div className="searchins">(Search by Hotel name,Food items,Categories,etc..)</div>  
            </div>
        )
    }
}
