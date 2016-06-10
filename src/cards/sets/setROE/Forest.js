"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Forest;
