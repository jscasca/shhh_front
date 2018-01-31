import React, { Component } from 'react';
import axios from 'axios';
import TextField from '../text-field/text-field';
import Button from '../button/button';
import './recover.css';

class Recover extends Component {
  constructor() {
    super();
    this.state = {
      step: "unlock",
      password: "",
      luckyNumber: ""
    };
  }

  sendRecover(){
    // Axios call
    axios.post('http://localhost:3001/ok', {
      password: this.state.password,
      luckyNumber: this.state.luckyNumber
    })
    .then((response) => {
      this.setStep('success');
    })
    .catch((error) => {
      this.setStep('error');
    });
  }

  submitInfo() {
    axios.post('http://localhost:3001/ok', {
      user: this.state.user,
      password: this.state.password,
      luckyNumber: this.state.luckyNumber,
      name: this.state.name,
      fieldOne: this.state.fieldOne,
      fieldTwo: this.state.fieldTwo,
      fieldThree: this.state.fieldThree,
      secret: this.state.secret,
      trustee: this.state.trustee,
      thirdParty: this.state.thirdParty
    })
    .then((response) => {
      this.setStep('success');
    })
    .catch((error) => {
      this.setStep('error');
    });
  }

  setAction(action) {
    if (action === "store") {
      this.setState({type: "store"});
    } else {
      this.setState({type: "read"})
    }
    this.setStep('userName');
  }

  setPathType(){
    if(this.state.type === "store") {
      this.setStep('personalInfo');
    } else {
      this.setStep('infoName');
    }
  }

  setStep(step) {
    this.setState({
        step: step
    });
  }

  changedPassword(password) {
    this.setState({password: password});
  }

  changedLuckyNumber(luckyNumber) {
    this.setState({luckyNumber: luckyNumber});
  }

  render() {
    return (
      <div className="message__wrapper">
        <div className="message__card">
          <div className={this.state.step === "unlock" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
            <div className="message_icon"><i class="fa fa-unlock fa-6 lock" aria-hidden="true"></i></div>
              <h2>Enter your password and lucky number</h2>
            </div>
            <div className="message__column">
              <TextField type="password" placeholder="Password" onChange={this.changedPassword.bind(this)}/>
              <TextField type="password" placeholder="Lucky Number" onChange={this.changedLuckyNumber.bind(this)}/>
            </div>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.sendRecover.bind(this)}></Button>
            </div>
          </div>
          <div className={this.state.step === "success" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <div className="message_icon"><i class="fa fa-check-circle success" aria-hidden="true"></i></div>
              <h2>Here's your info</h2>
            </div>
          </div>
          <div className={this.state.step === "error" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>An error has occured. Please try again later</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recover;
