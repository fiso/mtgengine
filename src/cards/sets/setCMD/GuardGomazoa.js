"use strict";
const Constants = require ("../../../Constants");
const GuardGomazoaBase = require("../setPCA/GuardGomazoa");

class GuardGomazoa extends GuardGomazoaBase {
  constructor (game) {
    super(game, "Guard Gomazoa", "Commander 2011", "CMD");
  }
}

module.exports = GuardGomazoa;
