import React, {Component} from "react";


class CheckBoxF extends Component {
    render() {
        const { handleChange } = this.props;
        return(
            <label>F

            <input 
            onClick={handleChange} 
            label='Feminino'
            name='women' type='checkbox'
            />
            </label>
        );
    }
}

export default CheckBoxF;
