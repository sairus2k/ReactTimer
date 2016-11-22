const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Timer = require('../../components/Timer');

describe('Timer', () => {
  let clock;

  before(() => {
    clock = new sinon.useFakeTimers();
  });

  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handleSetTimer()', () => {
    const countdown = TestUtils.renderIntoDocument(<Timer/>);

    it('should start count and set state on start', () => {
      countdown.handleStatusChange('started');
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.timerStatus).toBe('started');
      clock.tick(7001);
      expect(countdown.state.count).toBe(7);
    });

    it('should stop count and set state on pause', () => {
      countdown.handleStatusChange('paused');
      clock.tick(2001);
      expect(countdown.state.count).toBe(7);
      expect(countdown.state.timerStatus).toBe('paused');
    });

    it('should reset and set state on stop', () => {
      countdown.setState({ count: 10 });
      countdown.handleStatusChange('stopped');
      clock.tick(2001);
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.timerStatus).toBe('stopped');
    });
  });

  after(() => {
    clock.restore();
  });
});
