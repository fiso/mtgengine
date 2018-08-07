"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set9ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor (game) {
    super(game, "Volcanic Hammer", "Eighth Edition", "8ED");
  }
}

module.exports = VolcanicHammer;
