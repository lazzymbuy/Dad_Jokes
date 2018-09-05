import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      tanya:'',
      jawab:''
    }
  }
  klikGet(){
    var url='https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    axios.get(url).then((x)=>{
      console.log(x.data)
      this.setState({
        tanya:x.data.punchline,
        jawab:x.data.setup
      })
    })
  }
  
  render() {
    return (
      <div style={{backgroundColor:"pink"}}>
      <center>
        <div className="card" style={{width:"300px"}}>
          <div className="card-body">
            <h5 className="card-title" style={{textAlign:'right'}}>{this.state.jawab}</h5>
            <p className="card-text" style={{textAlign:'right'}}>{this.state.tanya}</p>
            <button onClick={()=>{this.klikGet()}} class="btn btn-primary btn-sm btn-right" style={{textAlign:'right'}}>Reload</button>
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;
