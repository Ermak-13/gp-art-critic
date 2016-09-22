var React = require('react');

var InfoField = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-3">
          <strong>
            { this.props.label }
          </strong>
        </div>

        <div className="col-md-9">
          { this.props.value || this.props.children }
        </div>
      </div>
    );
  }
});

module.exports = InfoField;
