import React, {Component} from "react";

class State extends Component{
    render(){
        const { handleChange } = this.props;
        return(
            <label>
                Estado
            <select
                onChange={handleChange}
                name='estado'>
                <option value='estado'>Estado</option>
                <option value='SP'>SP</option>
                <option value='RJ'>RJ</option>
                <option value='MG'>MG</option>
                <option value='PE'>PE</option>
                <option value='RS'>RS</option>
            </select>
            </label>
        )
    }
}

export default State;