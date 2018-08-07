"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setME4/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = SeaSerpent;
