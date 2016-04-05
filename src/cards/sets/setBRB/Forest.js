"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Forest;
