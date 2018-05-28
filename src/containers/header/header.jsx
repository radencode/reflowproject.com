import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

//Containers
import Download from 'containers/download';
import Logo from 'containers/logo';
import Menu from 'containers/menu';
import Slider from 'containers/slider';

//Components
import DownloadButton from 'containers/download/components/button.jsx';
import MenuButton from 'containers/menu/components/menuButton.jsx';
import MenuContainer from 'containers/menu/components/menuContainer.jsx';

class Header extends React.Component {
	constructor() {
		super();
		this.state = { isMenuOpen: false, menuAnimate: false, isDownloadOpen: false };
		this.isDesktop = this.detectDesktop();
	}

	detectDesktop = () => {
		if (navigator.userAgent.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry|webOS|Oper Mini/i)) return false;
		return true;
	};

	handleMenuButton = () => {
		if (!this.state.menuAnimate) {
			setTimeout(() => {
				this.setState({ ...this.state, menuAnimate: true });
			}, 500);
			this.setState({ ...this.state, isMenuOpen: true });
			return;
		}
		this.setState({ ...this.state, menuAnimate: false, isMenuOpen: false });
	};

	handleDownloadButton = () => {
		this.setState({ ...this.state, isDownloadOpen: !this.state.isDownloadOpen });
	};

	render() {
		return (
			<header>
				<div>
					<MediaQuery query='(max-width: 1023px)'>
						<Logo animate={this.props.animate} />
						<MenuButton
							animate={this.props.animate}
							isMenuOpen={this.state.isMenuOpen}
							handleMenuButton={this.handleMenuButton}
						/>
						<Menu isMenuOpen={this.state.isMenuOpen} animate={this.state.menuAnimate} />
					</MediaQuery>
					<MediaQuery query='(min-width: 1024px)'>
						<div class={`side-menu ${this.props.animate ? 'animate' : ''}`}>
							<div class='menu'>
								<MenuContainer animate={this.props.delayedAnimate} />
								<h3 class={`copyright ${this.props.delayedAnimate ? 'animate' : ''}`}>
									Copyright © 2018 reflowproject.com
								</h3>
							</div>
							<Logo animate={this.props.delayedAnimate} />
						</div>
						<Slider animate={this.props.animate} />
					</MediaQuery>
					<main>
						<div class={`slogan ${this.props.animate ? 'animate' : ''}`}>
							<h1>
								<span class={`highlight ${this.props.delayedAnimate ? 'animate' : ''}`}>Bring light to</span>
								<span class={`adjective ${this.props.delayedAnimate ? 'animate' : ''}`}> file management</span>
							</h1>
						</div>
						<div class='discription'>
							<h2 class={`${this.props.delayedAnimate ? 'animate' : ''}`}>
								— Rename, group and manage your files with Reflow. With its modern user interface and lighting fast API,
								it brings an incredible user experience.
							</h2>
							<div class={`line-break ${this.props.delayedAnimate ? 'animate' : ''}`} />
							<h2 class={`${this.props.delayedAnimate ? 'animate' : ''}`}>
								Reflow is currently available for Windows and MacOS systems. Download it and give it a go. Let us know
								what we can do better.
							</h2>
						</div>
						<DownloadButton
							active={this.isDesktop}
							openDownload={this.handleDownloadButton}
							animate={this.props.delayedAnimate}
						/>
					</main>
					<Download
						active={this.isDesktop}
						isOpen={this.state.isDownloadOpen}
						closeDownload={this.handleDownloadButton}
					/>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	animate: PropTypes.bool.isRequired,
	delayedAnimate: PropTypes.bool.isRequired,
};

export default Header;
