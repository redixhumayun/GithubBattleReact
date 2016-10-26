
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');
var Raven = require('raven-js');

var sentryKey = '43220fd6bf3e4b2e8925c8fa587cb562'
var sentryApp = '108770'
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch
	}
}).install();

ReactDOM.render(
	routes, document.getElementById('app')
)


