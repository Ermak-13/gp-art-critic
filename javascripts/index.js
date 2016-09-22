var React = require('react'),
    ReactDOM = require('react-dom'),

    Directory = require('./directory'),
    Uploader = require('./components/uploader'),
    Gallery = require('./components/gallery');

// GD - gallery directory
global.GD = new Directory();

ReactDOM.render(
  <Uploader />,
  document.getElementById('uploader-container')
);

ReactDOM.render(
  <Gallery />,
  document.getElementById('gallery-container')
);
