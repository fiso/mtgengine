"use strict";
const Constants = require ("../../../Constants");
const DoublingSeasonBase = require("../setBBD/DoublingSeason");

class DoublingSeason extends DoublingSeasonBase {
  constructor (game) {
    super(game, "Doubling Season", "Modern Masters", "MMA");
  }
}

module.exports = DoublingSeason;
