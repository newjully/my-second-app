import React,{Component} from "react";

class Age extends Component{
    render(){
        const { handleChange, value } = this.props;
        return(
            <label>Idade

            <input
            onChange={handleChange} 
            type='number'
            name='age' 
            placeholder='Idade'
            value={value}>
            </input>
            </label>
       
        )
    }
}

export default Age;