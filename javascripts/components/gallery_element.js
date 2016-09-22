var React = require('react');

var styles = {
  container: {
    base: {
      padding: '10px 0'
    },

    hover: {
      cursor: 'pointer',
      padding: '10px 0',
      background: '#EEE'
    },

    selected: {
      cursor: 'pointer',
      padding: '10px 0',
      background: '#DDD'
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
    return (
      <div className="row" style={ this.getContainerStyles() }
        onMouseOver={ this.handleMouseOverContainer}
        onMouseOut={ this.handleMouseOutContainer }
        onClick={ this.handleClickContainer }>

        <div className="col-md-3" style={{ overflowX: 'hidden' }}>
          <img style={{ height: '120px' }} src="http://static.tonkosti.ru/images/d/d1/%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D1%83_%D0%90%D0%B4%D0%B8%D1%88%D0%B8,_%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F.jpg" />
        </div>

        <div className="col-md-9">
          Welcom to My World
        </div>
      </div>
    );
  }
});

module.exports = GalleryEl;
