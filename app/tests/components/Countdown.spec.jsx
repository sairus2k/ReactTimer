const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('../../components/Countdown');

describe('Countdown', () => {
  let clock;

  before(() =>{
    clock = new sinon.useFakeTimers();
  });

  it('should exist', () => {
    expect(Countdown).toExist();
  });
  describe('handleSetCountdown()', () => {
    const countdown = TestUtils.renderIntoDocument(<Countdown/>);

    it('should set state to started and countdown', () => {
      countdown.handleSetCountdown(10);
      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
      clock.tick(3001);
      expect(countdown.state.count).toBe(7);
    });

    it('should never set count less than zero and should stopped', () => {
      countdown.handleSetCountdown(3);
      clock.tick(4001);
      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
    });

    it('should pause countdown on paused status', () => {
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      clock.tick(3001);
      expect(countdown.state.count).toBe(3);
      expect(countdown.state.countdownStatus).toBe('paused');
    });
  });

  after(() =>{
    clock.restore();
  });
});
