"use strict";
const Constants = require ("../../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden");

class SoulWarden extends SoulWardenBase {
  constructor (game) {
    super(game, "Soul Warden", "Planechase", "HOP");
  }
}

module.exports = SoulWarden;
