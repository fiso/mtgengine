"use strict";
const Constants = require ("../../../Constants");
const LivingLandsBase = require("../setME4/LivingLands");

class LivingLands extends LivingLandsBase {
  constructor (game) {
    super(game, "Living Lands", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LivingLands;
