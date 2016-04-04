"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenPredators extends Card {
  constructor(game) {
    super(game, "Hidden Predators", "Urza's Saga", "USG");
  }
}

module.exports = HiddenPredators;
