"use strict";
const Constants = require ("../../../Constants");
const GoblinCadetsBase = require("../setCMD/GoblinCadets");

class GoblinCadets extends GoblinCadetsBase {
  constructor (game) {
    super(game, "Goblin Cadets", "Urza's Saga", "USG");
  }
}

module.exports = GoblinCadets;
