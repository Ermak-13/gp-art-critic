var React = require('react'),
    Dropzone = require('react-dropzone');

var styles = {
  dropzone: {
    height: '200px',
    border: 'dashed 2px #666',
    borderRadius: '5px',
    cursor: 'pointer'
  },

  labelContainer: {
    height: '200px',
    display: 'table',
    margin: '0 50px'
  },

  label: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center'
  }
};

var Uploader = React.createClass({
  handleDrop: function (files) {
    global.GD.add(files);
  },

  render: function () {
    return (
      <Dropzone onDrop={ this.handleDrop } style={ styles.dropzone }>
        <div style={ styles.labelContainer }>
          <div className="lead text-muted" style={ styles.label }>
            Для загрузки, перетащите сюда файлы или кликните на область.
          </div>
        </div>
      </Dropzone>
    );
  }
});

module.exports = Uploader;
