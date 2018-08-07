"use strict";
const Constants = require ("../../../Constants");
const GuardGomazoaBase = require("../setPCA/GuardGomazoa");

class GuardGomazoa extends GuardGomazoaBase {
  constructor (game) {
    super(game, "Guard Gomazoa", "Planechase 2012", "PC2");
  }
}

module.exports = GuardGomazoa;
