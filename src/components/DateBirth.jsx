import React, {Component} from "react";

class DateBirth extends Component {
    render() {
        const { handleChange, value } = this.props;
        return(
            <label>
            Data de Nascimento
            <input
            onChange={ handleChange }
            name='dateOfBirth'
            type='date' 
            value={value}/>
            </label>
        )
    }
}

export default DateBirth;