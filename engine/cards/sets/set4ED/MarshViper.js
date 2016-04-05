"use strict";
const Constants = require ("../../../Constants");
const MarshViperBase = require("../set5ED/MarshViper");

class MarshViper extends MarshViperBase {
  constructor(game) {
    super(game, "Marsh Viper", "Fourth Edition", "4ED");
  }
}

module.exports = MarshViper;
