"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor(game) {
    super(game, "Forest", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Forest;
