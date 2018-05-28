import PropTypes from 'prop-types';
import React from 'react';

//Components
import MenuContainer from './components/menuContainer.jsx';

class Menu extends React.Component {
	render() {
		return (
			<div class={`menu ${this.props.isMenuOpen ? 'open' : 'closed'}`}>
				<MenuContainer animate={this.props.animate} />
				<h3 class={`copyright ${this.props.animate ? 'animate' : ''}`}>Copyright © 2018 reflowproject.com</h3>
			</div>
		);
	}
}

Menu.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
	animate: PropTypes.bool.isRequired,
};

export default Menu;
