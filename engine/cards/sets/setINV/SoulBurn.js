"use strict";
const Constants = require ("../../../Constants");
const SoulBurnBase = require("../setCST/SoulBurn");

class SoulBurn extends SoulBurnBase {
  constructor(game) {
    super(game, "Soul Burn", "Invasion", "INV");
  }
}

module.exports = SoulBurn;
