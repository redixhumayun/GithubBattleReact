var React = require('react');
var styles = require('../styles/index.js');

function MainContainer(props){
	return (
		<div className = 'jumbotron col-xs-12 text-center' style = {styles.transparentBg}>
			{props.children}
		</div>
	)
};

module.exports = MainContainer;