const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Timer = require('../../components/Timer');

describe('Timer', () => {
  let clock;
  
  before(() =>{
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
      expect(countdown.state.countdownStatus).toBe('started');
      clock.tick(7001);
      expect(countdown.state.count).toBe(7);
    });

    it('should stop count and set state on pause', () => {
      countdown.handleStatusChange('paused');
      expect(countdown.state.count).toBe(7);
      expect(countdown.state.countdownStatus).toBe('paused');
    });

    it('should reset and set state on stop', () => {
      countdown.handleStatusChange('stopped');
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
    });
  });

  after(() =>{
    clock.restore();
  });
});
