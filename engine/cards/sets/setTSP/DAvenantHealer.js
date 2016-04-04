"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DAvenantHealer extends Card {
  constructor(game) {
    super(game, "D'Avenant Healer", "Time Spiral", "TSP");
  }
}

module.exports = DAvenantHealer;
