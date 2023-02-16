import React, {Component} from "react";

class CheckBoxM extends Component {
    render() {
        const { handleChange } = this.props;
        return(
            <label>M

            <input 
            onClick={handleChange} 
            label='Masculino'
            name='male' type='checkbox'/>
            </label>
        )
    }
}

export default CheckBoxM;