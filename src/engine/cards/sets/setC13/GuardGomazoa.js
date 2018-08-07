"use strict";
const Constants = require ("../../../Constants");
const GuardGomazoaBase = require("../setPCA/GuardGomazoa");

class GuardGomazoa extends GuardGomazoaBase {
  constructor (game) {
    super(game, "Guard Gomazoa", "Commander 2013", "C13");
  }
}

module.exports = GuardGomazoa;
