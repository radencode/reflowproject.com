import React from 'react';
import ReactDOM from 'react-dom';

//Containers
import Header from 'containers/header';
import Loader from 'containers/loader';

//Styles
import './app.sass';

class App extends React.Component {
	render() {
		return <Loader />;
	}
}

const reflowporject = document.getElementById('reflowproject');

ReactDOM.render(<App />, reflowporject);
