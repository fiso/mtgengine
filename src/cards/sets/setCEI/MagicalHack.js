"use strict";
const Constants = require ("../../../Constants");
const MagicalHackBase = require("../setCED/MagicalHack");

class MagicalHack extends MagicalHackBase {
  constructor (game) {
    super(game, "Magical Hack", "International Collector's Edition", "CEI");
  }
}

module.exports = MagicalHack;
