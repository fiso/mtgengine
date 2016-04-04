"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclicalEvolution extends Card {
  constructor(game) {
    super(game, "Cyclical Evolution", "Future Sight", "FUT");
  }
}

module.exports = CyclicalEvolution;
