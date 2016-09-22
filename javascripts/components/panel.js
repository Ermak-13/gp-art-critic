var React = require('react'),
    sprintf = require('sprintf-js').sprintf,

    Button = require('./button');

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
        <Button
          className="btn btn-primary"
          style={{ marginRight: '5px' }}
          disabled={ this.props.disabled }
          value="Исправить время в метаданных"
        />

        <Button
          className="btn btn-success"
          disabled={ this.props.disabled }
          onClick={ this.props.actions.download }
          value="Скачать"
        />
      </div>
    );
  }
});

module.exports = Panel;
