"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setME4/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "Collectors’ Edition", "CED");
  }
}

module.exports = SeaSerpent;
