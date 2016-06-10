"use strict";
const Constants = require ("../../../Constants");
const SealofDoomBase = require("../setC15/SealofDoom");

class SealofDoom extends SealofDoomBase {
  constructor (game) {
    super(game, "Seal of Doom", "Nemesis", "NMS");
  }
}

module.exports = SealofDoom;
