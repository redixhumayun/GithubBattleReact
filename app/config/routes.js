var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory
var Main = require("../components/Main");
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer.js');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer.js');
var ResultsContainer = require('../containers/ResultsContainer.js');

var routes = (
	<Router history = {browserHistory}>
		<Route path  = '/' component = {Main}>
			<IndexRoute component = {Home} />
			<Route path = 'playerone' header  = 'player one' component = {PromptContainer} />
			<Route path = 'playertwo/:playerone' header = 'player two' component = {PromptContainer} />
			<Route path = 'battle' component = {ConfirmBattleContainer}/>
			<Route path = 'results' component = {ResultsContainer} />
		</Route>
	</Router>
);

module.exports = routes;