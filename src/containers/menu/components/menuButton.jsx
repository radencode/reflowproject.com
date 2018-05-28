import PropTypes from 'prop-types';
import React from 'react';

const MenuButton = ({ animate, isMenuOpen, handleMenuButton }) => {
	return (
		<div class={`menu-button ${animate ? 'animate' : ''}`} onClick={handleMenuButton}>
			<div class={`line top ${isMenuOpen ? 'open' : 'closed'}`} />
			<div class={`line middle ${isMenuOpen ? 'open' : 'closed'}`} />
			<div class={`line bottom ${isMenuOpen ? 'open' : 'closed'}`} />
		</div>
	);
};

MenuButton.propTypes = {
	animate: PropTypes.bool.isRequired,
	isMenuOpen: PropTypes.bool.isRequired,
	handleMenuButton: PropTypes.func.isRequired,
};

export default MenuButton;
