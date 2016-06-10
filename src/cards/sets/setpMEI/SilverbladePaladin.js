"use strict";
const Constants = require ("../../../Constants");
const SilverbladePaladinBase = require("../setAVR/SilverbladePaladin");

class SilverbladePaladin extends SilverbladePaladinBase {
  constructor (game) {
    super(game, "Silverblade Paladin", "Media Inserts", "pMEI");
  }
}

module.exports = SilverbladePaladin;
