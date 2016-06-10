"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set8ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor (game) {
    super(game, "Volcanic Hammer", "Starter 1999", "S99");
  }
}

module.exports = VolcanicHammer;
