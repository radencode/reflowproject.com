import PropTypes from 'prop-types';
import React from 'react';

class Menu extends React.Component {
	render() {
		return <div class={`menu ${this.props.isOpen ? 'open' : 'closed'}`}>
			<div class='developers'></div>
			<div class='github'></div>
		</div>;
	}
}

Menu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
};

export default Menu;
