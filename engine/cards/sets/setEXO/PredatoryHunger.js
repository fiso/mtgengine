"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PredatoryHunger extends Card {
  constructor(game) {
    super(game, "Predatory Hunger", "Exodus", "EXO");
  }
}

module.exports = PredatoryHunger;
