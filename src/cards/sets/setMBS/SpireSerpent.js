"use strict";
const Constants = require ("../../../Constants");
const SpireSerpentBase = require("../setTD2/SpireSerpent");

class SpireSerpent extends SpireSerpentBase {
  constructor (game) {
    super(game, "Spire Serpent", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpireSerpent;
