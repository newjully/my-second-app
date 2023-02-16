import React,{Component} from "react";
import './style.css';


class Name extends Component{
    render(){

        const { handleChange, value } = this.props;
        return(
            <label>
                Nome Completo
            <input
            onChange={handleChange} 
            type='text' 
            name='name' 
            placeholder='Name Completo'
            value={value}> 
            </input>   
            </label>


        )
    }
}

export default Name;