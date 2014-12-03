'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var MafiaGenerator = yeoman.generators.Base.extend({
  init: function () {

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Mafia generator!'));
  },

  app: function () {
  },

  projectfiles: function () {
  }
});

module.exports = MafiaGenerator;
