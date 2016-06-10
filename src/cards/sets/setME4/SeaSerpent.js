"use strict";
const Constants = require ("../../../Constants");
const SeaSerpentBase = require("../setCED/SeaSerpent");

class SeaSerpent extends SeaSerpentBase {
  constructor (game) {
    super(game, "Sea Serpent", "Masters Edition IV", "ME4");
  }
}

module.exports = SeaSerpent;
