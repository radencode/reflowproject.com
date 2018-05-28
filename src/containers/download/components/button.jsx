import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ active, animate, openDownload }) => {
	return (
		<div class={`download-button ${active ? 'active' : 'inactive'} ${animate ? 'animate' : ''}`} onClick={openDownload}>
			<h3>{active ? 'Download latest version' : 'Visit on desktop to download'}</h3>
		</div>
	);
};

Button.propTypes = {
	active: PropTypes.bool.isRequired,
	animate: PropTypes.bool.isRequired,
	openDownload: PropTypes.func.isRequired,
};

export default Button;
