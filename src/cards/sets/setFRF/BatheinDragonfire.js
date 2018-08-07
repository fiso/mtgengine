"use strict";
const Constants = require ("../../../Constants");
const BatheinDragonfireBase = require("../setBBD/BatheinDragonfire");

class BatheinDragonfire extends BatheinDragonfireBase {
  constructor (game) {
    super(game, "Bathe in Dragonfire", "Fate Reforged", "FRF");
  }
}

module.exports = BatheinDragonfire;
