const React = require('react');
const Clock = require('./Clock');

const Timer = React.createClass({
  render: function () {
    return (
      <div>
        Timer.jsx
        <Clock/>
      </div>
    )
  }
});

module.exports = Timer;
