var React = require('react'),
    ReactDOM = require('react-dom'),

    Uploader = require('./components/uploader'),
    Gallery = require('./components/gallery');

ReactDOM.render(
  <Uploader />,
  document.getElementById('uploader-container')
);

ReactDOM.render(
  <Gallery />,
  document.getElementById('gallery-container')
);
