var React = require('react'),
    sprintf = require('sprintf-js').sprintf;

var Panel = React.createClass({
  getDisabledClassName: function (className) {
    if (this.props.disabled) {
      return sprintf('%s disabled', className);
    } else {
      return className;
    }
  },

  render: function() {
    return (
      <div>
        <a href="#" className={ this.getDisabledClassName('btn btn-primary') }
          style={{ marginRight: '5px' }}>
          Исправить время в метаданных
        </a>

        <a href="#" className={ this.getDisabledClassName('btn btn-success') }>
          Скачать
        </a>
      </div>
    );
  }
});

module.exports = Panel;
