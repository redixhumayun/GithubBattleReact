var React = require('react');
var transparentBg = require('../styles').transparentBg;
var space = require('../styles').space;
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetails = require('../components/UserDetails.js');
var UserDetailsWrapper = require('../components/UserDetailsWrapper.js');
var MainContainer = require('./MainContainer.js');
var Loading = require('./Loading.js');

function ConfirmBattle(props){
	return props.isLoading == true
		?<Loading speed = {100} text = 'Wait a moment'/>
		:
		<MainContainer>
			<h2>Confirm Players</h2>
			<div className = 'col-xs-8 col-xs-offset-2'>
				<UserDetailsWrapper number = 'Player 1'>
					<UserDetails info={props.playersInfo[0]}/>
				</UserDetailsWrapper>
				<UserDetailsWrapper number = 'Player 2'>
					<UserDetails info={props.playersInfo[1]} />
				</UserDetailsWrapper>
			</div>
			<div className = 'col-xs-8 col-xs-offset-2'>
				<div className = 'col-xs-12'>
					<button type = 'button' 
					className = 'btn btn-lg btn-success' 
					onClick = {props.onInitiateBattle} 
					style = {space}>Begin Battle</button>
				</div>
				<div className = 'col-xs-12'>
					<Link to = '/playerone'>
						<button type = 'button' 
						className = 'btn btn-lg btn-danger' 
						style = {space}>Reselect Players</button>
					</Link>
				</div>
			</div>
		</MainContainer>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;