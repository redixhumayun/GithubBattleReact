var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer.js');

var Home = React.createClass({
	render: function(){
		return (
			<MainContainer>
				<h1>Github Battle</h1>
				<p className = 'lead'>Get your battle on!</p>
				<Link to = '/playerone'>
					<button className = 'btn btn-large success' type = 'button'>Get Started</button>
				</Link>
			</MainContainer>
		)
	}
});

module.exports = Home;