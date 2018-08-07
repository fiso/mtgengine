"use strict";
const Constants = require ("../../../Constants");
const SurvivaloftheFittestBase = require("../setTPR/SurvivaloftheFittest");

class SurvivaloftheFittest extends SurvivaloftheFittestBase {
  constructor (game) {
    super(game, "Survival of the Fittest", "Vintage Masters", "VMA");
  }
}

module.exports = SurvivaloftheFittest;
