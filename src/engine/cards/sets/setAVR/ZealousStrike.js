"use strict";
const Constants = require ("../../../Constants");
const ZealousStrikeBase = require("../setCN2/ZealousStrike");

class ZealousStrike extends ZealousStrikeBase {
  constructor (game) {
    super(game, "Zealous Strike", "Avacyn Restored", "AVR");
  }
}

module.exports = ZealousStrike;
