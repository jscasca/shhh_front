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
    const query = new URLSearchParams(this.props.location.search);
    axios.get('http://localhost/rich_shhh/site/content.php', {
      params: {
        secret: this.state.password,
        lucky: this.state.luckyNumber,
        i: query.get('i'),
        code: query.get('code')
      }
    })
    .then((response) => {
      //load all the info
      this.setState({f1: response.data.f1});
      this.setState({f2: response.data.f2});
      this.setState({f3: response.data.f3});
      this.setStep('success');
    })
    .catch((error) => {
      switch(error.response.status) {
        case 410: this.setStep('gone'); break;
        case 401: case 403: this.setStep('failure'); break;
        default: this.setStep('error');
      }
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
            <p>Field One: {this.state.f1}</p>
            <p>Filed Two: {this.state.f2}</p>
            <p>Field Three: {this.state.f3}</p>
          </div>
          <div className={this.state.step === "error" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <h2>An error has occured. Please try again later</h2>
            </div>
          </div>
          <div className={this.state.step === "failure" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <div className="message_icon"><i class="fa fa-times-circle failure" aria-hidden="true"></i></div>
              <h2>The keys do not seem to match</h2>
            </div>
          </div>
          <div className={this.state.step === "gone" ? "message__step" : "message__step hide"}>
            <div className="message__card-title">
              <div className="message_icon"><i class="fa fa-cloud gone" aria-hidden="true"></i></div>
              <h2>The resource has been moved. Start a new claim</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recover;
