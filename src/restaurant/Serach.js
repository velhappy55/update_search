import React from 'react';
import options from './Options';


export default class AutoCompletedText extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChange = (e,val) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = options.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
            
        }),()=>{this.props.handleName(value)})
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
                {
                    suggestions.map((item, index) => (<div key={index} onClick={() => this.selectedText(item)}>{item}</div>))
                }
            </ul>
        );
    }
    
    render() {
        const { text} = this.state;
        return(
            <div>
                 <label className="label" > <div>Search</div>
                <input className="search" type="text" onChange={this.onTextChange} value={text}/>
                <div className="suggestion"> {this.renderSuggestions()}</div>
                </label> 
                <p style={{color:"red"}}>(Search by Hotel name,Food items,Categories,etc..)</p>  
            </div>
        );
    }

}