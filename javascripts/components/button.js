var React = require('react'),
    sprintf = require('sprintf-js').sprintf;

var ClassName = React.createClass({
  getDefaultProps: function() {
    return {
      className: 'btn btn-default',
      style: {}
    };
  },

  handleClick: function (e) {
    e.preventDefault();

    this.props.onClick();
  },

  render: function() {
    var className = (
      this.props.disabled ? sprintf('%s disabled', this.props.className) : this.props.className
    );

    return (
      <a href="#" className={ className } style={ this.props.style }
        onClick={ this.handleClick }>

        { this.props.value || this.props.children }
      </a>
    );
  }
});

module.exports = ClassName;
