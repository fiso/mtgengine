"use strict";
const Constants = require ("../../../Constants");
const SilverbladePaladinBase = require("../setAVR/SilverbladePaladin");

class SilverbladePaladin extends SilverbladePaladinBase {
  constructor (game) {
    super(game, "Silverblade Paladin", "Commander 2014", "C14");
  }
}

module.exports = SilverbladePaladin;
