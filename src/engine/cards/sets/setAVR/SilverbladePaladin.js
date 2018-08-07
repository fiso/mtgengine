"use strict";
const Constants = require ("../../../Constants");
const SilverbladePaladinBase = require("../setC14/SilverbladePaladin");

class SilverbladePaladin extends SilverbladePaladinBase {
  constructor (game) {
    super(game, "Silverblade Paladin", "Avacyn Restored", "AVR");
  }
}

module.exports = SilverbladePaladin;
