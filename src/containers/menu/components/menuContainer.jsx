import PropTypes from 'prop-types';
import React from 'react';

class MenuContainer extends React.Component {
	render() {
		return (
			<div class='menu-container'>
				<section class={`title dev ${this.props.animate ? 'animate' : ''}`}>
					<h1 class='background'>Developers</h1>
					<h1 class='highlight'>Developers</h1>
				</section>
				<section class='developers'>
					<div class={`person ${this.props.animate ? 'animate' : ''}`}>
						<h2 class='name'>
							Teddy <span>Radenkov</span>
						</h2>
						<h3 class='role'>Front-End Developer</h3>
					</div>
					<div class={`breaker ${this.props.animate ? 'animate' : ''}`}>
						<div class='dot left' />
						<div class='dot right' />
					</div>
					<div class={`person ${this.props.animate ? 'animate' : ''}`}>
						<h2 class='name'>
							Hristo <span>Hentov</span>
						</h2>
						<h3 class='role'>Back-End Developer</h3>
					</div>
				</section>
				<section class={`title git ${this.props.animate ? 'animate' : ''}`}>
					<h1 class='background'>Github Repo</h1>
					<h1 class='highlight'>Github Repo</h1>
				</section>
				<section class={`repo ${this.props.animate ? 'animate' : ''}`}>
					<a class='circle' href='https://github.com/HristoHentov/Reflow' target='_blank' rel='noopener noreferrer'>
						<div class='icon-link'>
							<i class='fab fa-github' />
							<h3>View</h3>
						</div>
					</a>
				</section>
			</div>
		);
	}
}

MenuContainer.propTypes = {
	animate: PropTypes.bool.isRequired,
};

export default MenuContainer;
