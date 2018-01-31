import React, { Component } from 'react';
import './text-field.css';

class TextField extends Component {
    constructor() {
        super();
        this.state = { focused: false, input: "" }
    }

onFocus() {
    this.setState({focused: true});
    this.refs.textField.focus();
}

onBlur() {
    if (!this.refs.textField.value) {
        this.setState({focused: false});
    }
}

onChange() {
    this.props.onChange(this.refs.textField.value);
}

  render() {
    return (
      <div className="text-field__wrapper">
        <div className={ this.state.focused ? "text-field__container selected" : "text-field__container" }>
            <input 
                className="text-field__input"
                type={this.props.type}
                onClick={this.onFocus.bind(this)} 
                onBlur={this.onBlur.bind(this)} 
                ref="textField"
                onFocus={this.onFocus.bind(this)}
                onChange={this.onChange.bind(this)}
            />
            <div 
                className={ this.state.focused ? "text-field__title selected" : "text-field__title" }
                onClick={this.onFocus.bind(this)}
                ref="label"
            >{this.props.placeholder}</div>
        </div>
      </div>
    );
  }
}

export default TextField;
