"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarefulConsideration extends Card {
  constructor(game) {
    super(game, "Careful Consideration", "Modern Masters", "MMA");
  }
}

module.exports = CarefulConsideration;
