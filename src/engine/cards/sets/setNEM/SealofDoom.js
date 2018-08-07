"use strict";
const Constants = require ("../../../Constants");
const SealofDoomBase = require("../setMM3/SealofDoom");

class SealofDoom extends SealofDoomBase {
  constructor (game) {
    super(game, "Seal of Doom", "Nemesis", "NEM");
  }
}

module.exports = SealofDoom;
