"use strict";
const Constants = require ("../../../Constants");
const RapaciousOneBase = require("../setCMD/RapaciousOne");

class RapaciousOne extends RapaciousOneBase {
  constructor (game) {
    super(game, "Rapacious One", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RapaciousOne;
