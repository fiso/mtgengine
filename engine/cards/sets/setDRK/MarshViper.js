"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshViperBase = require("../set5ED/MarshViper.js");

class MarshViper extends MarshViperBase {
  constructor(game) {
    super(game, "Marsh Viper", "The Dark", "DRK");
  }
}

module.exports = MarshViper;
