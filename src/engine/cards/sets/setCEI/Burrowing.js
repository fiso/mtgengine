"use strict";
const Constants = require ("../../../Constants");
const BurrowingBase = require("../set6ED/Burrowing");

class Burrowing extends BurrowingBase {
  constructor (game) {
    super(game, "Burrowing", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Burrowing;
