import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

class Download extends React.Component {
	constructor() {
		super();
		this.state = { downloaded: false };
	}

	handleDownload = () => {
		this.setState({ downloaded: true });
	};

	closeDownload = () => {
		this.setState({ downloaded: false });
		this.props.closeDownload();
	};

	renderDownload = (systemOS, isOpen) => {
		return (
			<a href='http://www.reflowproject.com/download/windows' onClick={this.handleDownload}>
				<div class={`download ${systemOS}`}>
					<MediaQuery query='(max-width: 719px)'>
						<svg class='svg-download' width='150' height='150'>
							<rect
								class={`svg-download-border ${isOpen ? 'open' : 'closed'}`}
								width='150'
								height='150'
								strokeDasharray='600'
								strokeDashoffset='600'
							/>
						</svg>
					</MediaQuery>
					<MediaQuery query='(min-width: 720px) and (max-width: 1399px)'>
						<svg class='svg-download' width='200' height='200'>
							<rect
								class={`svg-download-border ${isOpen ? 'open' : 'closed'}`}
								width='200'
								height='200'
								strokeDasharray='800'
								strokeDashoffset='800'
							/>
						</svg>
					</MediaQuery>
					<MediaQuery query='(min-width: 1400px)'>
						<svg class='svg-download' width='300' height='300'>
							<rect
								class={`svg-download-border ${isOpen ? 'open' : 'closed'}`}
								width='300'
								height='300'
								strokeDasharray='1200'
								strokeDashoffset='1200'
							/>
						</svg>
					</MediaQuery>
					<i class={`fab fa-${systemOS === 'mac' ? 'apple' : systemOS} ${isOpen ? 'open' : 'closed'}`} />
					<h2 class={`${isOpen ? 'open' : 'closed'}`}>{`Download for ${systemOS}`}</h2>
				</div>
			</a>
		);
	};

	render() {
		return (
			<div
				class={`download-overlay ${this.props.active ? 'active' : 'inactive'} ${this.props.isOpen ? 'open' : 'closed'}`}
			>
				<div class={`download-background ${this.props.isOpen ? 'open' : 'closed'}`}>
					<div class='close-button' onClick={this.closeDownload}>
						<div class='c-bar' />
						<div class='c-bar' />
					</div>
					<div class={`download-options ${this.state.downloaded ? 'downloaded' : 'downloading'}`}>
						{this.renderDownload('windows', this.props.isOpen)}
						{this.renderDownload('mac', this.props.isOpen)}
					</div>
					<div class={`download-message ${this.state.downloaded ? 'downloaded' : 'downloading'}`}>
						<h2>Thank you for downloading Reflow.</h2>
						<h2>We would appreciate your feedback.</h2>
					</div>
				</div>
			</div>
		);
	}
}

Download.propTypes = {
	active: PropTypes.bool.isRequired,
	closeDownload: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default Download;
