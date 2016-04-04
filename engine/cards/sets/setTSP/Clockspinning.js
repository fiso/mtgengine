"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Clockspinning extends Card {
  constructor(game) {
    super(game, "Clockspinning", "Time Spiral", "TSP");
  }
}

module.exports = Clockspinning;
