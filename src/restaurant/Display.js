import React, { Component } from 'react'
import { MdLocationOn } from "react-icons/md";
import {FaStar } from "react-icons/fa";
export default class Display extends Component {
         render() {
        const productList=this.props.data.map((data,i)=>(  
          <div  key={i}> 
              <div className="row">
              <img className="pic" src={process.env.PUBLIC_URL+`/products/${data.win}.jpg`} alt={data.title} />
              <div className="side"><div className="row"><div className="name">{data.name}</div>&nbsp; <div>({data.type})</div>
            <div className="rating"><FaStar className="icon"/>Rating- {data.rating} </div></div>
            <div className="amount">Avg. Amount- {data.amount} </div>
            <div><MdLocationOn className="icon"/>{data.address}</div>
            <div className="cate"> Category: <b>{data.category} </b></div>
            <div style={{marginLeft:5}}className="row"> Food Items:<div className="fooditem">{data.items}</div></div>
            </div>
            </div>
             <hr/>
            </div>
            ))   
        return (
            <div>
                <div >
                 {productList}
                 </div>
            </div>
        )
    }
}
