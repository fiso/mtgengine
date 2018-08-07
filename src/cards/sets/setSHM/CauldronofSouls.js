"use strict";
const Constants = require ("../../../Constants");
const CauldronofSoulsBase = require("../setCM2/CauldronofSouls");

class CauldronofSouls extends CauldronofSoulsBase {
  constructor (game) {
    super(game, "Cauldron of Souls", "Shadowmoor", "SHM");
  }
}

module.exports = CauldronofSouls;
