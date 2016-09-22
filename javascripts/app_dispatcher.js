var MicroEvent = require('microevent'),
    Events = require('./events');

var AppDispatcher = function () {
  this.updatedGD = function (files) {
    this.trigger(Events.updatedGD, files);
  };
};
MicroEvent.mixin(AppDispatcher);

module.exports = new AppDispatcher();
