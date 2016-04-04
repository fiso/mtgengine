"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenalishCavalry extends Card {
  constructor(game) {
    super(game, "Benalish Cavalry", "Time Spiral", "TSP");
  }
}

module.exports = BenalishCavalry;
