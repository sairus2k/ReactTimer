const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Clock = require('../../components/Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);

    it('should render clock to output', () => {
      const $el = $(ReactDOM.findDOMNode(clock));
      const actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds()', () => {
    const clock = TestUtils.renderIntoDocument(<Clock/>);

    it('should format 616 seconds', () => {
      const seconds = 616;
      const expected = '10:16';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format 61 seconds', () => {
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format 91 seconds', () => {
      const seconds = 91;
      const expected = '01:31';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('should format 0 seconds', () => {
      const seconds = 0;
      const expected = '00:00';
      const actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

  });
});
