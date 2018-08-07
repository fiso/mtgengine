"use strict";
const Constants = require ("../../../Constants");
const SealofDoomBase = require("../setMM3/SealofDoom");

class SealofDoom extends SealofDoomBase {
  constructor (game) {
    super(game, "Seal of Doom", "Commander 2015", "C15");
  }
}

module.exports = SealofDoom;
