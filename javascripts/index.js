var React = require('react'),
    ReactDOM = require('react-dom'),

    Uploader = require('./components/uploader'),
    Panel = require('./components/panel');

ReactDOM.render(
  <Uploader />,
  document.getElementById('uploader-container')
);

ReactDOM.render(
  <Panel />,
  document.getElementById('panel-container')
);
