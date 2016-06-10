"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "Unlimited Edition", "2ED");
  }
}

module.exports = SeaSerpent;
