'use strict';

var React = require('react');
var ReactRedux = require('react-redux');
var Container = require('./container');
var Layout = require('./layout');

module.exports = React.createClass({
	render() {
		var Provider = ReactRedux.Provider;
		return (
			<Layout data={this.props}>
				<Provider store={ this.props.store }>
				  <Container />
				</Provider>
			</Layout>
		);
	}
});