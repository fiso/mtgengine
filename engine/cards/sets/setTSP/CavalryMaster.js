"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavalryMaster extends Card {
  constructor(game) {
    super(game, "Cavalry Master", "Time Spiral", "TSP");
  }
}

module.exports = CavalryMaster;
