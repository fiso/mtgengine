"use strict";
const Constants = require ("../../../Constants");
const DoublingSeasonBase = require("../setBBD/DoublingSeason");

class DoublingSeason extends DoublingSeasonBase {
  constructor (game) {
    super(game, "Doubling Season", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = DoublingSeason;
