var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var msg = this.refs.address.value;

    if (msg.length > 0) {
      this.refs.address.value = '';
      this.props.onNewAddress(msg);
    }
  },

  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="address" placeholder="Enter a city name" />
        <button type="submit">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
