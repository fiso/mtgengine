"use strict";
const Constants = require ("../../../Constants");
const LivingLandsBase = require("../set6ED/LivingLands");

class LivingLands extends LivingLandsBase {
  constructor (game) {
    super(game, "Living Lands", "Limited Edition Alpha", "LEA");
  }
}

module.exports = LivingLands;
