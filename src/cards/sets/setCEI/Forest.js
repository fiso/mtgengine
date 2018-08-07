"use strict";
const Constants = require ("../../../Constants");
const ForestBase = require("../setC18/Forest");

class Forest extends ForestBase {
  constructor (game) {
    super(game, "Forest", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Forest;
