"use strict";
const Constants = require ("../../../Constants");
const SealofDoomBase = require("../setMM3/SealofDoom");

class SealofDoom extends SealofDoomBase {
  constructor (game) {
    super(game, "Seal of Doom", "Dissension", "DIS");
  }
}

module.exports = SealofDoom;
