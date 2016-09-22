var React = require('react'),
    ReactDOM = require('react-dom'),

    Directory = require('./directory'),
    AppDispatcher = require('./app_dispatcher'),
    Uploader = require('./components/uploader'),
    Gallery = require('./components/gallery');

// GD - gallery directory
global.GD = new Directory();
global.AppDispatcher = AppDispatcher;
global.moment = require('moment');

ReactDOM.render(
  <Uploader />,
  document.getElementById('uploader-container')
);

ReactDOM.render(
  <Gallery />,
  document.getElementById('gallery-container')
);
