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
		this.state = { loaded: false, loading: true };
	}

	finishLoading = () => {
		this.setState({ ...this.state, loading: false });
		setTimeout(() => {
			this.setState({ ...this.state, loaded: true });
		}, 3000);
	};

	renderLoader = loaded => {
		if (loaded) return;
		return <Loader finishLoading={this.finishLoading} />;
	};

	renderHeader = loading => {
		if (loading) return;
		return <Header hasLoaded={this.state.loaded} />;
	};

	render() {
		return (
			<div class='app'>
				{/*this.renderHeader(this.state.loading)*/}
				{/*this.renderLoader(this.state.loaded)*/}
				<Header hasLoaded={true} />
			</div>
		);
	}
}

const reflowporject = document.getElementById('reflowproject');

ReactDOM.render(<App />, reflowporject);
