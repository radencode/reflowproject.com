import PropTypes from 'prop-types';
import React from 'react';

class Loader extends React.Component {
	constructor() {
		super();
		this.state = { message: '', messageStage: '', ballStage: '' };
	}

	componentDidMount() {
		this.initialize();
	}

	typeMessageAnimation = (message, done) => {
		return new Promise(resolve => {
			const lettersCount = message.length - 1;
			this.setState({ ...this.state, messageStage: 'typing' });
			message.split('').forEach((letter, index) => {
				setTimeout(() => {
					this.setState({ ...this.state, message: `${this.state.message}${letter}` });
					if (lettersCount === index) {
						this.setState({ ...this.state, messageStage: 'slide' });
						setTimeout(() => {
							this.setState({ ...this.state, messageStage: 'closed' });
							setTimeout(() => {
								this.setState({ message: '', messageStage: done ? 'reflow' : 'initial' });
								resolve();
							}, 750);
						}, 750);
					}
				}, 150 * index);
			});
		});
	};

	initialize = () => {
		setTimeout(() => {
			this.setState({ ...this.state, messageStage: 'initial', ballStage: 'initial' });
			setTimeout(async () => {
				await this.typeMessageAnimation('Rename.', false);
				this.setState({ ...this.state, ballStage: 'initial first' });
				await this.typeMessageAnimation('Group.', false);
				this.setState({ ...this.state, ballStage: 'initial second' });
				await this.typeMessageAnimation('Manage.', true);
				this.setState({ ...this.state, ballStage: 'initial third' });
				setTimeout(() => {
					this.setState({ ...this.state, messageStage: 'loaded' });
					setTimeout(() => {
						this.props.loaded();
					}, 1000);
				}, 1500);
			}, 500);
		}, 500);
	};

	render() {
		return (
			<main>
				<div class='loader-container'>
					<div class='message'>
						<div class={`bar ${this.state.messageStage}`} />
						<div class={`slider ${this.state.messageStage}`}>
							<div class={`typed ${this.state.messageStage}`}>{this.state.message}</div>
							<div class={`highlight ${this.state.messageStage}`}>{this.state.message}</div>
						</div>
					</div>
					<div class='bounce-loader'>
						<div class={`ball ${this.state.ballStage}`} />
						<div class={`ball ${this.state.ballStage}`} />
						<div class={`ball ${this.state.ballStage}`} />
					</div>
					<div class='logo-loader'>
						<svg
							class={`r-logo ${this.state.messageStage}`}
							x='0px'
							y='0px'
							viewBox='0 0 577 586'
							enableBackground='new 0 0 577 586'
						>
							<g>
								<polygon
									fill='#FFFFFF'
									points='573,172.75 566.5,147.875 557.75,126.125 544.125,100.5 534,86 520.625,70.375 505.75,55.375 
     486.25,40.5 470.25,29.75 446.5,18.25 428.25,11.375 410,6.375 388.625,2.375 368,0 295,0 178,0 0,0 0,6 32.375,37.125 
     65.375,70.375 99.375,104.375 135.125,139.75 141.5,146 178,146 235,146 341,146 368,146 376.25,147.375 385.5,150 
     392.625,153.375 400,158.375 406.75,162.75 418.625,174.375 424.75,185 429.625,197.75 432,211 432,224 429.5,239.625 
     424.625,251.625 416.375,261.875 405.75,273.5 394,281.875 382,287.25 368.125,290 289,290 288.729,290 288.75,293.25 
     298.125,302.5 364.125,369.25 393.75,398.625 421,426 424,426.875 429.75,425.375 444.75,419.5 463.875,410.5 487.375,395.625 
     509.5,377.25 528.375,357.375 548,327.75 563.125,296.75 571.25,269.875 576.438,235.375 577,216.375 577,198 	'
								/>
								<polygon fill='#FFFFFF' points='0,292 0,294.725 291,586 496.917,586 203,292 	' />
							</g>
						</svg>
						<svg class={`r-svg ${this.state.messageStage}`}>
							<circle
								class={`r-border ${this.state.messageStage}`}
								cx='120'
								cy='120'
								r='100'
								strokeDasharray='1000'
								strokeDashoffset='1000'
							/>
						</svg>
					</div>
				</div>
			</main>
		);
	}
}

Loader.propTypes = {
	loaded: PropTypes.func.isRequired,
};

export default Loader;
