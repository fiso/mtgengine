"use strict";
const Constants = require ("../../../Constants");
const GuardGomazoaBase = require("../setPCA/GuardGomazoa");

class GuardGomazoa extends GuardGomazoaBase {
  constructor (game) {
    super(game, "Guard Gomazoa", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = GuardGomazoa;
