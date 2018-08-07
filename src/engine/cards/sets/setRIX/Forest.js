"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Forest;
