import React, { Component } from 'react';
import axios from 'axios';
import TextField from '../text-field/text-field';
import Button from '../button/button';
import CryptoTab from '../crypto-tab/crypto-tab';
import './message.css';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      step: "action",
      type: "",
      user: "",
      password: "",
      luckyNumber: "",
      name: "",
      fieldOne: "",
      fieldTwo: "",
      fieldThree: "",
      secret:"",
      trustee: "",
      thirdParty: ""
    };
  }

  sendRecover(){
    // Axios call
    axios.post('http://localhost:3001/ok', {"name": "Erik"})
    .then((response) => {
      this.setStep('sentEmail');
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

  resetForm() {
    this.setState({
      step: "action",
      type: "",
      user: "",
      password: "",
      luckyNumber: "",
      name: "",
      fieldOne: "",
      fieldTwo: "",
      fieldThree: "",
      secret:"",
      trustee: "",
      thirdParty: ""
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

  changedUserName(user) {
    this.setState({user: user});
  }

  changedPassword(password) {
    this.setState({password: password});
  }

  changedLuckyNumber(luckyNumber) {
    this.setState({luckyNumber: luckyNumber});
  }

  changedName(name) {
    this.setState({name: name});
  }

  changedFieldOne(fieldOne) {
    this.setState({fieldOne: fieldOne});
  }

  changedFieldTwo(fieldTwo) {
    this.setState({fieldTwo: fieldTwo});
  }

  changedFieldThree(fieldThree) {
    this.setState({fieldThree: fieldThree});
  }

  changedSecret(secret) {
    this.setState({secret: secret});
  }

  changedTrustee(trustee) {
    this.setState({trustee: trustee});
  }

  changedThirdParty(thirdParty) {
    this.setState({thirdParty: thirdParty});
  }

  render() {
    return (
      <div className="message__wrapper">
        <div className="message__card">
          <div className={this.state.step === "action" ? "message__step" : "message__step hide"}>
            <div className="message_icon"><i class="fa fa-lock fa-6 lock" aria-hidden="true"></i></div>
            <div className="message__card-title">
              <h2>1 - What do you want to do?</h2>
              <div className="message__main-option">
                <Button label="Save my information" color="red" route="/test" icon="lock" onClick={this.setAction.bind(this, 'store')}></Button>
                <Button label="Recover my information" color="blue" route="/test" icon="unlock-alt" onClick={this.setAction.bind(this, 'read')}></Button>
              </div>
            </div>
          </div>
          <div className={this.state.step === "userName" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>2 - Enter your username</h2>
            </div>
            <TextField placeholder="Username" onChange={this.changedUserName.bind(this)}/>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.setPathType.bind(this)}></Button>
            </div>
          </div>
          <div className={this.state.step === "personalInfo" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>3 - Enter your information</h2>
            </div>
            <div className="message__columns">
              <div className="message__column">
                <TextField placeholder="Name" onChange={this.changedName.bind(this)}/>
                <TextField placeholder="Field 1" onChange={this.changedFieldOne.bind(this)}/>
                <TextField placeholder="Field 2" onChange={this.changedFieldTwo.bind(this)}/>
                <TextField placeholder="Field 3" onChange={this.changedFieldThree.bind(this)}/>
              </div>
            </div>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.setStep.bind(this, 'security')}></Button>
            </div>
          </div>
          <div className={this.state.step === "infoName" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>3 - Enter then name of your information</h2>
            </div>
            <TextField placeholder="Name" onChange={this.changedName.bind(this)}/>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.sendRecover.bind(this)}></Button>
            </div>
          </div>
          <div className={this.state.step === "security" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>4 - Enter your password and lucky number</h2>
            </div>
            <div className="message__column">
              <TextField type="password" placeholder="Password" onChange={this.changedPassword.bind(this)}/>
              <TextField type="password" placeholder="Lucky Number" onChange={this.changedLuckyNumber.bind(this)}/>
            </div>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.setStep.bind(this, 'trustee')}></Button>
            </div>
          </div>
          <div className={this.state.step === "trustee" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>5 - Enter your trustee & 3rd party</h2>
            </div>
            <div className="message__column">
              <TextField placeholder="Trustee" onChange={this.changedTrustee.bind(this)}/>
              <TextField placeholder="3rd Party" onChange={this.changedThirdParty.bind(this)}/>
            </div>
            <div className="message__button-container">
              <Button label="Next" color="red" route="/test" icon="arrow" onClick={this.setStep.bind(this, 'review')}></Button>
            </div>
          </div>
          <div className={this.state.step === "review" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>7 - Review your information</h2>
            </div>
            <p>Name: {this.state.name}</p>
            <p>Field One: {this.state.fieldOne}</p>
            <p>Filed Two: {this.state.fieldTwo}</p>
            <p>Field Three: {this.state.fieldThree}</p>
            <p>Trustee: {this.state.trustee}</p>
            <p>Third Party: {this.state.thirdParty}</p>
            <div className="message__button-container">
              <Button label="Submit" color="red" route="/test" icon="arrow" onClick={this.submitInfo.bind(this)}></Button>
            </div>
          </div>
          <div className={this.state.step === "success" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <div className="message_icon"><i class="fa fa-check-circle success" aria-hidden="true"></i></div>
              <h2>Your information is now stored securely</h2>
            </div>
          </div>
          <div className={this.state.step === "sentEmail" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
            <div className="message_icon"><i class="fa fa-check-circle success" aria-hidden="true"></i></div>
              <h2>We sent you an email. Please follow the instructions to receive your information.</h2>
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

export default Message;
