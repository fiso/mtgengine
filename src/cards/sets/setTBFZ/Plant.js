"use strict";
const Constants = require ("../../../Constants");
const PlantBase = require("../setTC18/Plant");

class Plant extends PlantBase {
  constructor (game) {
    super(game, "Plant", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = Plant;
