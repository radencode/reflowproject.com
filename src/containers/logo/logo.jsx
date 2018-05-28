import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import React from 'react';

const Logo = ({ animate }) => {
	return (
		<div class='logo-container'>
			<div class='logo'>
				<svg
					class={`logo-reflow-svg ${animate ? 'animate' : ''}`}
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
				<svg class='logo-border-svg'>
					<MediaQuery query='(max-width: 1023px)'>
						<circle
							class={`logo-border-circle ${animate ? 'animate' : ''}`}
							cx='20'
							cy='20'
							r='18'
							strokeDasharray='1000'
							strokeDashoffset='1000'
						/>
					</MediaQuery>
					<MediaQuery query='(min-width: 1024px)'>
						<circle
							class={`logo-border-circle ${animate ? 'animate' : ''}`}
							cx='25'
							cy='25'
							r='23'
							strokeDasharray='1000'
							strokeDashoffset='1000'
						/>
					</MediaQuery>
				</svg>
			</div>
			<div class='logo-labels'>
				<h2 class={`${animate ? 'animate' : ''}`}>flow</h2>
				<h2 class={`${animate ? 'animate' : ''}`}>project</h2>
			</div>
		</div>
	);
};

Logo.propTypes = {
	animate: PropTypes.bool.isRequired,
};

export default Logo;
