"use strict";
const Constants = require ("../../../Constants");
const CavernofSoulsBase = require("../setMM3/CavernofSouls");

class CavernofSouls extends CavernofSoulsBase {
  constructor (game) {
    super(game, "Cavern of Souls", "Avacyn Restored", "AVR");
  }
}

module.exports = CavernofSouls;
