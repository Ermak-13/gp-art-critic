var _ = require('underscore'),
    JSZip = require('jszip'),
    saveAs = require('file-saver').saveAs;

var donwloads = function (files) {
  var zip = new JSZip();

  _.each(files, function (file) {
    zip.file(file.name, file);
  });

  zip.generateAsync({type:"blob"})
    .then(function (blob) {
      saveAs(blob, "gallery-fixer.zip");
    });
};

module.exports = donwloads;
