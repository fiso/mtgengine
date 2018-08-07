"use strict";
const Constants = require ("../../../Constants");
const LivingLandsBase = require("../setME4/LivingLands");

class LivingLands extends LivingLandsBase {
  constructor (game) {
    super(game, "Living Lands", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = LivingLands;
