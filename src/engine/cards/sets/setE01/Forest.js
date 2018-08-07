"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Forest;
