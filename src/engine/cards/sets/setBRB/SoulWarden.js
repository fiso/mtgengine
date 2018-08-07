"use strict";
const Constants = require ("../../../Constants");
const SoulWardenBase = require("../setMM3/SoulWarden");

class SoulWarden extends SoulWardenBase {
  constructor (game) {
    super(game, "Soul Warden", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SoulWarden;
