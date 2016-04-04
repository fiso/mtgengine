"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor(game) {
    super(game, "Sea Serpent", "Fourth Edition", "4ED");
  }
}

module.exports = SeaSerpent;
