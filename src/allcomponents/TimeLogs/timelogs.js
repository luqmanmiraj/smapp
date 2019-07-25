import React, { Component } from 'react';

export default class timelogs extends Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date(new Date().setHours(0, 0, 0, 0)),
            started: false,
            counterS : 0
        };

        this.startimer= this.startimer.bind(this);
        this.stoptimer =this.stoptimer.bind(this);
      }

componentDidMount() {


    this.timerID = setInterval(

      () => this.tick(),
      1000
    );

    
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

    if(this.state.started){
       // let seconds = this.state.date.getSeconds() + 1;
       // this.state.date + seconds;
      let n =  this.state.counterS;
    this.setState({
     
        counterS: n+1,
        date: new Date(new Date().setHours(0, 0, n+1 , 0))
    });

    }

  }




startimer(){
    this.setState({
        started: true
    });



}
stoptimer(){
    this.setState({
        started: false
    });



}






render(){
return(
<div>
<button onClick={this.startimer}> start time </button> 
<button onClick={this.stoptimer}> Stop time </button> 
<p> {this.state.date.toString()}{this.state.date.getHours()}: {this.state.date.getMinutes()} : { this.state.date.getSeconds()}</p>


</div>
);
}

}
