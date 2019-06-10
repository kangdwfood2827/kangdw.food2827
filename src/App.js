import React, { Component } from 'react';
import './App.css';

import IconexConnect from './IconexConnect';
import {
  IconConverter
} from 'icon-sdk-js'
import SDK from './SDK.js';


function return_tx_hash(hex) {
  return parseInt(hex[5], 16);
}

const FOOD_LIST = [
  "짜장면",
  "라면",
  "짜파구리",
  "우동",
  "돈까지",
  "치즈돈까지",
  "된장찌개",
  "사이다",
  "굶어요..",
  "삼겹살",
  "피자",
  "크로와상",
  "마카롱",
  "부대찌개",
  "회",
  "커피",
  "진저에일"
]

export default class App extends Component {
  state = {
    login: false,
    foodname: FOOD_LIST[0],
    myAddress: ''
  }

  clickme = async (e) => {
    const myAddress = await IconexConnect.getAddress()
    this.setState({
      login: true,
      myAddress: myAddress
    })
  }

  clickagain = async () => {
    const { sendTxBuild2 } = SDK
    const txObj = sendTxBuild2({
      from: this.state.myAddress,
      to: window.CONTRACT_ADDRESS,
    })

    const tx = await IconexConnect.sendTransaction(txObj)
    if (tx) {
      this.setState({
        foodname: FOOD_LIST[return_tx_hash(tx)],
      })
    }
    console.log(return_tx_hash(tx), this.state.foodname)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1><a href="/"></a></h1>
          {
            !this.state.login ? (
              <>
                <div className="wrap2" ></div>
                <div className="wrap" onClick={this.clickme} >
                  {/* <img href="#"   src="//"></img> */}
                </div>
              </>
            ) : (
                <>
                  <h2>{this.state.foodname}</h2>
                  <section>
                    <div className="container">
                      <a href="#" className="green" onClick={this.clickagain}>다시하기</a>
                    </div>
                  </section>
                </>
              )
          }
        </header>
      </div>
    );
  }

}



