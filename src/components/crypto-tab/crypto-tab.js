import React from 'react'
import { Btc, Eth, Xrp/*, Bch*/ } from 'react-cryptocoins';

import './crypto-tab.css'

class CryptoTab extends React.Component {

    goTo(event) {
        event.stopPropagation();
        this.props.onClick();
    }

    getCryptoType(crypto) {
        switch(crypto) {
            case 'btc':
                return <div><Btc color="#FF9E2C"/><div className="crypto__name">{this.props.text}</div></div>;
                //break;
            case 'eth':
                return <div><Eth color="#3C3C3D"/><div className="crypto__name">{this.props.text}</div></div>;
                //break;
            case 'xrp':
                return <div><Xrp color="#4e77ba"/><div className="crypto__name">{this.props.text}</div></div>;
                //break;
            case 'default':
                return;
                default: return;
        }
    }

    render() {
        return (
            <div className="crypto__tab" onClick={this.goTo.bind(this)}>
                {this.getCryptoType(this.props.type)}
            </div>
        );
    }
}

export default CryptoTab;

