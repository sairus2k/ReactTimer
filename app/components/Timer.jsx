const React = require('react');
const Clock = require('./Clock');
const Controls = require('./Controls');

const Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    const status = this.state.timerStatus;
    if (status !== prevState.timerStatus) {
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
  componetWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = null;
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
      timerStatus: newStatus
    });
  },
  render: function () {
    const { count, timerStatus } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={timerStatus}/>
      </div>
    )
  }
});

module.exports = Timer;
