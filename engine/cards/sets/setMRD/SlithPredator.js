"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlithPredator extends Card {
  constructor(game) {
    super(game, "Slith Predator", "Mirrodin", "MRD");
  }
}

module.exports = SlithPredator;
