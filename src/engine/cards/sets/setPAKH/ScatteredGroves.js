"use strict";
const Constants = require ("../../../Constants");
const ScatteredGrovesBase = require("../setAKH/ScatteredGroves");

class ScatteredGroves extends ScatteredGrovesBase {
  constructor (game) {
    super(game, "Scattered Groves", "Amonkhet Promos", "PAKH");
  }
}

module.exports = ScatteredGroves;
