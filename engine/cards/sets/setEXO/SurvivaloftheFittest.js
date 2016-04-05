"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivaloftheFittest extends UnimplementedCard {
  constructor(game) {
    super(game, "Survival of the Fittest", "Exodus", "EXO");
  }
}

module.exports = SurvivaloftheFittest;
