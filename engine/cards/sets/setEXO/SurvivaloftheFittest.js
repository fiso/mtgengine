"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurvivaloftheFittest extends Card {
  constructor(game) {
    super(game, "Survival of the Fittest", "Exodus", "EXO");
  }
}

module.exports = SurvivaloftheFittest;
