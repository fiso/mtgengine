"use strict";
const Constants = require ("../../../Constants");
const VolcanicHammerBase = require("../set8ED/VolcanicHammer");

class VolcanicHammer extends VolcanicHammerBase {
  constructor (game) {
    super(game, "Volcanic Hammer", "Super Series", "pSUS");
  }
}

module.exports = VolcanicHammer;
