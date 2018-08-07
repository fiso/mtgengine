"use strict";
const Constants = require ("../../../Constants");
const PlantBase = require("../setTC18/Plant");

class Plant extends PlantBase {
  constructor (game) {
    super(game, "Plant", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Plant;
