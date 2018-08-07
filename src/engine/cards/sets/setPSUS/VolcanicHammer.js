"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set9ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor (game) {
    super(game, "Volcanic Hammer", "Junior Super Series", "PSUS");
  }
}

module.exports = VolcanicHammer;
