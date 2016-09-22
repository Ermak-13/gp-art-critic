var React = require('react'),
    _ = require('underscore'),

    Panel = require('./panel'),
    GalleryEl = require('./gallery_element');

var styles = {
  header: {
    container: {
      padding: '10px'
    },

    title: {
      fontWeight: 'bold'
    }
  }
};

var Gallery = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron" style={ styles.header.container }>
          <div className="pull-right">
            <Panel />
          </div>

          <strong className="lead" style={ styles.header.title }>
            135 Изображений
          </strong>
          <div className="clearfix" />
        </div>

        <div>
          { this.getElementsHTML() }
        </div>
      </div>
    );
  },

  getElementsHTML: function () {
    return _.times(3, function (i) {
      return (
        <GalleryEl
          key={ i }
        />
      );
    });
  }
});

module.exports = Gallery;
