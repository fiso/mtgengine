"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setME4/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSerpent;
