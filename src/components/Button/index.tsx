import React from "react";
import style from './button.module.scss'

class Button extends React.Component <{ text:string, onClick?: () => void}>{
    render() {
        return (
            <button onClick={this.props.onClick} className={style.botao}>
                {this.props.text}
            </button>
        );
    }
}

export default Button