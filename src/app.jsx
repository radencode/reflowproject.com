import React from 'react';
import ReactDOM from 'react-dom';

//Containers
import Header from 'containers/header';

//Styles
import './app.sass';

class App extends React.Component{
  render(){
    return <Header/>
  }
}

const reflowporject = document.getElementById('reflowproject');

ReactDOM.render(<App/>, reflowproject);