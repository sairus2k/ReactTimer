const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Controls = require('../../components/Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  describe('render', () => {
    it('should render Pause button when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
      const el = ReactDOM.findDOMNode(controls);
      const pause = el.children[0];
      expect(pause.innerHTML).toBe('Pause');
    });
    it('should render Start button when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
      const el = ReactDOM.findDOMNode(controls);
      const pause = el.children[0];
      expect(pause.innerHTML).toBe('Start');
    });
  });
});
