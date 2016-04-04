"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set8ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor(game) {
    super(game, "Volcanic Hammer", "Ninth Edition", "9ED");
  }
}

module.exports = VolcanicHammer;
