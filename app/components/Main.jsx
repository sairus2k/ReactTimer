const React = require('react');
const Nav = require('./Nav');

const Main = props => (
  <div>
    <Nav/>
    <div>
      <div>
        Main.jsx rendered
        {props.children}
      </div>
    </div>
  </div>
);

module.exports = Main;
