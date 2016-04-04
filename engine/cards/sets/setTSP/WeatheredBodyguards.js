"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeatheredBodyguards extends Card {
  constructor(game) {
    super(game, "Weathered Bodyguards", "Time Spiral", "TSP");
  }
}

module.exports = WeatheredBodyguards;
