"use strict";
const Constants = require ("../../../Constants");
const SoulShredBase = require("../setME4/SoulShred");

class SoulShred extends SoulShredBase {
  constructor(game) {
    super(game, "Soul Shred", "Portal", "POR");
  }
}

module.exports = SoulShred;
