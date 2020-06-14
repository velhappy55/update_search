import React, { Component } from 'react'
import products from './Db';
import Display from "./Display";
import Sort from "./Sort";
import Rate from "./Rate"
import City from "./City";
import Range from "./Range"
import Search from "./Serach"
export default class Mani extends Component {
constructor (props) {
    super(props)
    this.state = {
        data:products,
        sort:"",
        rate:"low",
        city:"",
        filteredData:products,
        name:"",
        range:800
    }
  }
handleSort =(e)=>{
   this.setState({sort:e.target.value})
  }
handleRate =(e)=>{
                this.setState({rate:e.target.value})
                this.listres();
               }
 listres()
                    {
                        this.setState(state=>{
                         if(this.state.rate!==""){
                        this.state.filteredData.sort((a,b)=>(state.rate==="low")?
                        (a.rating<b.rating?1:-1) :(a.rating>b.rating?1:-1))}
                         else{
                         this.state.filteredData.sort((a,b)=>(a.id<b.id?1:-1));
                         }})
            }
             
handleCity =(e)=>{
                    this.setState({city:e.target.value}) 
                } 

handleName =(e)=>{
    console.log(e)
            this.setState({name:e}) 
                } 

handleRange =(data)=>{
    console.log(data)
                    this.setState({range:data})
                   }
         
  render() {
            let filteredData=this.state.data.filter(data=>{
            return data.info.toLowerCase().indexOf(this.state.name.toLowerCase())!== -1 &&
            data.city.toLowerCase().indexOf(this.state.city.toLowerCase())!== -1 &&
            (data.amount>=this.state.range)-1 &&
            data.category.toLowerCase().indexOf(this.state.sort.toLowerCase())!== -1 })
            
        return (
            <div >
                <div className="head"> Search Restaurants from Top Cities in TamilNadu</div>
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-sm-12">
                       <div className="contain1">
                         <City city={this.state.city} handleCity={this.handleCity}/> 
                         <Search handleName={this.handleName}/>
                         {/* <Name city={this.state.name} handleName={this.handleName}/>  */}
                         <Range handleRange={this.handleRange}/>
                        <Sort sort={this.state.sort} handleSort={this.handleSort}/> 
                        <Rate rate={this.state.rate} handleRate={this.handleRate}/>
                         </div>
                         </div>
                    <div className="col-md-12 col-lg-9 col-sm-12">  
                    <div className="contain2">      
                    <Display handleCart={this.handleCart} data={filteredData}/>
                    </div> 
                </div>
                </div> 
                </div>
       
        )
    }
}
