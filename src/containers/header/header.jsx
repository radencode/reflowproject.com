import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Containers
import Logo from 'containers/logo';

class Header extends React.Component {
	constructor() {
		super();
		this.isDesktop = this.detectDesktop();
	}

	detectDesktop = () => {
		if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry|webOS|Oper Mini/i)) return false;
		return true;
	};

	renderContent = hasLoaded => {
		if (!hasLoaded) return;
		return (
			<div>
				<Logo />
				<div class='menu-button'>
					<div class='bar top' />
					<div class='bar middle' />
					<div class='bar bottom' />
				</div>
				<main>
					<div class='slogan'>
						<h1>
							<span>Bring light to</span> file management
						</h1>
					</div>
					<h2 class='discription'>
						— Rename, group and manage your files with Reflow. With its modern user interface and lighting fast API, it
						brings an incredible user experience. Download it and try it yourself.
					</h2>
					<div class='download'>
						<h3>{this.isDesktop ? 'Download latest version' : 'Visit on desktop to download'}</h3>
					</div>
				</main>
			</div>
		);
	};

	render() {
		return <header>{this.renderContent(this.props.hasLoaded)}</header>;
	}
}

Header.propTypes = {
	hasLoaded: PropTypes.bool.isRequired,
};

export default Header;
