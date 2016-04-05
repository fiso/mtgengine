"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Starter 1999", "S99");
  }
}

module.exports = Forest;
