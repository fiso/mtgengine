"use strict";
const Constants = require ("../../../Constants");
const SamiteHealerBase = require("../set10E/SamiteHealer");

class SamiteHealer extends SamiteHealerBase {
  constructor (game) {
    super(game, "Samite Healer", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SamiteHealer;
