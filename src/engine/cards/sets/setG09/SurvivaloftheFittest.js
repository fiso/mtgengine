"use strict";
const Constants = require ("../../../Constants");
const SurvivaloftheFittestBase = require("../setTPR/SurvivaloftheFittest");

class SurvivaloftheFittest extends SurvivaloftheFittestBase {
  constructor (game) {
    super(game, "Survival of the Fittest", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = SurvivaloftheFittest;
