"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setATH/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Forest;
