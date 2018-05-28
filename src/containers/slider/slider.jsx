import PropTypes from 'prop-types';
import React from 'react';

class Slider extends React.Component {
	constructor() {
		super();
		this.state = { image: 'browse' };
		this.images = ['browse', 'selected', 'configure'];
		this.imageIndex = 1;
	}

	componentDidMount() {
		setTimeout(() => {
			this.interval = setInterval(() => {
				this.setState({ ...this.state, image: this.images[this.imageIndex] });
				if (this.imageIndex < this.images.length - 1) this.imageIndex++;
				else this.imageIndex = 0;
			}, 5000);
		}, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div class='slider'>
				<div class={`zoom-circle small ${this.props.animate ? 'animate' : ''}`} />
				<div class={`zoom-circle medium ${this.props.animate ? 'animate' : ''}`} />
				<div class={`zoom-circle large ${this.props.animate ? 'animate' : ''}`} />
				<div class={`image-container ${this.props.animate ? 'animate' : ''}`}>
					<div class={`image-slider browse ${this.state.image === 'browse' ? 'active' : 'inactive'}`} />
					<div class={`image-slider selected ${this.state.image === 'selected' ? 'active' : 'inactive'}`} />
					<div class={`image-slider configure ${this.state.image === 'configure' ? 'active' : 'inactive'}`} />
				</div>
			</div>
		);
	}
}

Slider.propTypes = {
	animate: PropTypes.bool.isRequired,
};

export default Slider;
