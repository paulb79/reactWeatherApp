var React = require('react');

var WeatherForecast = React.createClass({
  render: function() {

    var msg = this.props.msg;

    return (
      <div>
        <p>Weather Forecast</p>
        <p>{msg}</p>
      </div>
    );
  }
});

module.exports = WeatherForecast;
