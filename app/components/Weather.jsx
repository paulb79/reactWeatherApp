var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherForecast = require('WeatherForecast');

var Weather = React.createClass({

  getDefaultProps: function() {
    return {
      msg: ''
    };
  },

  getInitialState: function() {
    return {
      msg: this.props.msg
    };
  },

  handleNewAddress: function(msg) {
    this.setState({
      msg: msg
    });
  },

  render: function() {
    var msg = this.state.msg;

    return (
      <div>
        <h3>Weather</h3>
        <WeatherForm onNewAddress={this.handleNewAddress}/>
        <WeatherForecast msg={msg} />
      </div>
    );
  }
});

module.exports = Weather;
