"use strict";
const Constants = require ("../../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden");

class SoulWarden extends SoulWardenBase {
  constructor (game) {
    super(game, "Soul Warden", "Magic 2010", "M10");
  }
}

module.exports = SoulWarden;
