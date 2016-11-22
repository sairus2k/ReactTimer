const React = require('react');
const Clock = require('./Clock');
const Controls = require('./Controls');

const Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    const status = this.state.countdownStatus;
    if (status !== prevState.countdownStatus) {
      const switchCase = {
        started: () => {
          this.startTimer();
        },
        stopped: () => {
          this.setState({ count: 0 });
          (switchCase['paused'])();
        },
        paused: () => {
          clearInterval(this.timer);
          this.timer = null;
        },
        default: () => {
        }
      };
      (switchCase[status] || switchCase['default'])();
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function () {
    const { count, countdownStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={countdownStatus}/>
      </div>
    )
  }
});

module.exports = Timer;
