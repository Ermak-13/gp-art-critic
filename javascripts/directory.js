var Directory = function () {
  this.files = [];

  this.add = function (files) {
    this.files = this.files.concat(files);
  };

  this.get = function (files) {
    return files;
  };

  this.set = function (files) {
    this.files = files;
  };
};

module.exports = Directory;
