"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulShredBase = require("../setME4/SoulShred.js");

class SoulShred extends SoulShredBase {
  constructor(game) {
    super(game, "Soul Shred", "Portal", "POR");
  }
}

module.exports = SoulShred;
