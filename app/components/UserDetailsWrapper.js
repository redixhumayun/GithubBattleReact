var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper(player){
	return (
		<div className = 'col-xs-6'>
			<p className = 'lead'>{player.number}</p>
			{player.children}
		</div>
	)
}

UserDetailsWrapper.propTypes = {
	number: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;