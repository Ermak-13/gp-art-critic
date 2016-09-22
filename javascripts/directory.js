var AppDispatcher = require('./app_dispatcher'),
    Events = require('./events');

var Directory = function () {
  this.files = [];

  this.add = function (files) {
    this.files = this.files.concat(files);
    AppDispatcher.updatedGD(this.files);
  };

  this.updated = function (callback) {
    AppDispatcher.bind(Events.updatedGD, callback);
  };

  this.count = function () {
    return this.files.lenght;
  };

  this.get = function (files) {
    return this.files;
  };

  this.set = function (files) {
    this.files = files;
  };
};

module.exports = Directory;
