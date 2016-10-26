var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var UserDetails = require('./UserDetails.js');
var UserDetailsWrapper = require('./UserDetailsWrapper.js');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer.js');
var Loading = require('./Loading.js');

function StartOver(){
	return (
		<div className = 'col-xs-12' style = {styles.space}>
			<Link to = '/playerone'>
				<button type = 'button' className = 'btn btn-lg btn-success'>
					Start Over
				</button>
			</Link>
		</div>
	)
}

function UserData(props){
	var WinningIndex = props.data.scores[0] > props.data.scores[1] ? 0 : 1;
	var LosingIndex = WinningIndex == 0 ? 1 : 0;
	return (
		<div className = 'col-xs-8 col-xs-offset-2'>
			<UserDetailsWrapper number = 'Winner'>
				<UserDetails score = {props.data.scores[WinningIndex]} info = {props.data.playersInfo[WinningIndex]}/>
			</UserDetailsWrapper>
			<UserDetailsWrapper number = 'Loser'>
				<UserDetails score = {props.data.scores[LosingIndex]} info = {props.data.playersInfo[LosingIndex]} />
			</UserDetailsWrapper>
		</div>
	)
}

function Results(props){
	if(props.isLoading === true){
		return (
			<Loading text = 'One Moment' speed = {100}/>
		)
	}

	if(props.scores[0] === props.scores[1]){
		return(
			<MainContainer>
				<h2>Its a tie!</h2>
				<UserData data = {props}/>
				<StartOver />
			</MainContainer>
		)
	}

	

	return (
		<MainContainer>
			<h2>Results</h2>
			<UserData data = {props}/>
		</MainContainer>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired, 
	scores: PropTypes.array.isRequired, 
	playersInfo: PropTypes.array.isRequired
}

module.exports = Results;