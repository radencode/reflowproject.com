import React from 'react';
import ReactDOM from 'react-dom';

//Containers
import Header from 'containers/header';
import Loader from 'containers/loader';

//Styles
import './app.sass';

class App extends React.Component {
	constructor() {
		super();
		this.state = { loading: true };
	}

	loaded = () => {
		this.setState({ loading: false });
	};

	render() {
		return this.state.loading ? <Loader loaded={this.loaded} /> : <Header />;
	}
}

const reflowporject = document.getElementById('reflowproject');

ReactDOM.render(<App />, reflowporject);
