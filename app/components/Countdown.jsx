const React = require('react');
const Clock = require('./Clock');
const CountdownForm = require('./CountdownForm');

const Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) {
    const status = this.state.countdownStatus;
    if (status !== prevState.countdownStatus) {
      const switchCase = {
        started: () => {
          this.startTimer();
        },
        default: () =>{}
      };
      (switchCase[status] || switchCase['default'])();
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount > 0 ? newCount : 0
      });
    }, 1000)
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },
  render: function () {
    const { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
