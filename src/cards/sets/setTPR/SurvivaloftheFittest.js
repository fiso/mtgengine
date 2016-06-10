"use strict";
const Constants = require ("../../../Constants");
const SurvivaloftheFittestBase = require("../setEXO/SurvivaloftheFittest");

class SurvivaloftheFittest extends SurvivaloftheFittestBase {
  constructor (game) {
    super(game, "Survival of the Fittest", "Tempest Remastered", "TPR");
  }
}

module.exports = SurvivaloftheFittest;
