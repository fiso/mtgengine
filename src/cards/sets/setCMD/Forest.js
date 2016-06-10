"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Forest;
