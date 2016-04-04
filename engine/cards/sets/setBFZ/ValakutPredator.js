"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ValakutPredator extends Card {
  constructor(game) {
    super(game, "Valakut Predator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ValakutPredator;
