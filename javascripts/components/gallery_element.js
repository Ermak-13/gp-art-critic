var React = require('react'),

    InfoField = require('./info_field');

var styles = {
  container: {
    base: {
      padding: '10px 0',
      margin: 0
    },

    hover: {
      cursor: 'pointer',
      padding: '10px 0',
      background: '#EEE',
      margin: 0
    },

    selected: {
      cursor: 'pointer',
      padding: '10px 0',
      background: '#DDD',
      margin: 0
    }
  }
};

var GalleryEl = React.createClass({
  getInitialState: function() {
    return {
      hover: false,
      selected: false
    };
  },

  handleClickContainer: function () {
    this.setState({
      selected: !this.state.selected
    });
  },

  handleMouseOverContainer: function () {
    this.setState({ hover: true });
  },

  handleMouseOutContainer: function () {
    this.setState({ hover: false });
  },

  getContainerStyles: function () {
    if (this.state.selected) return styles.container.selected;
    if (this.state.hover) return styles.container.hover;

    return styles.container.base;
  },

  render: function () {
    var obj = this.props.obj;

    return (
      <div className="row" style={ this.getContainerStyles() }
        onMouseOver={ this.handleMouseOverContainer}
        onMouseOut={ this.handleMouseOutContainer }
        onClick={ this.handleClickContainer }>

        <div className="col-md-3" style={{ overflowX: 'hidden' }}>
          <img style={{ height: '120px' }} src={ obj.preview } />
        </div>

        <div className="col-md-9">
          <InfoField label="Name:" value={ obj.name } />
          <InfoField label="Type:" value={ obj.type } />
          <InfoField label="Size:" value={ obj.size } />
          <InfoField label="Last modified:" value={ obj.lastModified } />
        </div>
      </div>
    );
  }
});

module.exports = GalleryEl;
