import React from 'react';


class task extends React.Component {
    state = {
        auth: true
    }



    render() {
      return <h1> Hello, Task {this.props.name} </h1>;
    }


  }

  export default task;