"use strict";
const Constants = require ("../../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden");

class SoulWarden extends SoulWardenBase {
  constructor (game) {
    super(game, "Soul Warden", "Tenth Edition", "10E");
  }
}

module.exports = SoulWarden;
