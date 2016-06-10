"use strict";
const Constants = require ("../../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden");

class SoulWarden extends SoulWardenBase {
  constructor (game) {
    super(game, "Soul Warden", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = SoulWarden;
