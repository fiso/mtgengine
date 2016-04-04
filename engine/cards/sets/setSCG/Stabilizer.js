"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stabilizer extends Card {
  constructor(game) {
    super(game, "Stabilizer", "Scourge", "SCG");
  }
}

module.exports = Stabilizer;
