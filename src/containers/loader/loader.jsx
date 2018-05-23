import React from 'react';

class Loader extends React.Component {
	constructor(){
		super();
		this.state = { message: '', stage: '' };
		this.messages = ['Rename.', 'Group.', 'Manage.'];
		this.messageSize = 0;
		this.startLoader();
	}

	typeMessage = word => {
		if(word.length === this.letterPosition) {
			this.lettersCount = 0; 
			return;
		}
		this.setState({...this.state, message: `${this.state.message}${word[this.letterPosition]}`});
		this.letterPosition++;
	}

	startLoader = () => {
		setTimeout(() => {
			this.setState({...this.state, stage: 'initial'});
			setTimeout(() => {
				this.setState({...this.state, stage: 'typing'});
				this.messageSize = this.messages[0].length - 1;
				this.messages[0].split('').map((letter, index) => {
					setTimeout(() => {
						this.setState({stage: this.messageSize === index ? 'initial' : 'typing', message: `${this.state.message}${letter}`});
					}, 300 * index);	
				});
			}, 1000);
		}, 500);
	}

	render() {
		return (
			<main>
				<div class='loader-container'>
					<div class='message'>
						<div class={`slider ${this.state.stage}`}></div>
						<div class='typed'>{this.state.message}</div>
						<div class='highlight'>{this.state.message}</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Loader;
