var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('div', null, 'Hello World');
  }
});

ReactDOM.render(React.createElement(HelloWorld), document.querySelector('#react-mount'));