var React = require('react'),
    _ = require('underscore'),
    sprintf = require('sprintf-js').sprintf,

    Panel = require('./panel'),
    GalleryEl = require('./gallery_element');

var styles = {
  header: {
    container: {
      margin: '0',
      marginBottom: '2px',
      padding: '10px',
      borderRadius: 0
    },

    title: {
      fontWeight: 'bold'
    }
  }
};

var Gallery = React.createClass({
  getInitialState: function() {
    return {
      files: []
    };
  },

  componentWillMount: function() {
    global.GD.updated(function (files) {
      this.setState({ files: files });
    }.bind(this));
  },

  getActions: function () {
    return {
      download: function () {
        global.Actions.download(this.state.files);
      }.bind(this)
    };
  },

  render: function() {
    var status = sprintf('%s изображений', this.state.files.length);

    return (
      <div>
        <div className="jumbotron" style={ styles.header.container }>
          <div className="pull-right">
            <Panel
              disabled={ this.state.files.length <= 0 }
              actions={ this.getActions() }
            />
          </div>

          <strong className="lead" style={ styles.header.title }>
            { status }
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
    return _.map(this.state.files, function (el, i) {
      return (
        <GalleryEl
          key={ i }
          obj={ el }
        />
      );
    });
  }
});

module.exports = Gallery;
