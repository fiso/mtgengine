"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshcoatBear extends Card {
  constructor(game) {
    super(game, "Ashcoat Bear", "Time Spiral", "TSP");
  }
}

module.exports = AshcoatBear;
