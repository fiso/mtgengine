"use strict";
const Constants = require ("../../../Constants");
const TandemTacticsBase = require("../setBBD/TandemTactics");

class TandemTactics extends TandemTacticsBase {
  constructor (game) {
    super(game, "Tandem Tactics", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TandemTactics;
