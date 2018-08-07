"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set9ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor (game) {
    super(game, "Volcanic Hammer", "Seventh Edition", "7ED");
  }
}

module.exports = VolcanicHammer;
