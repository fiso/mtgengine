"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurvivaloftheFittestBase = require("../setEXO/SurvivaloftheFittest.js");

class SurvivaloftheFittest extends SurvivaloftheFittestBase {
  constructor(game) {
    super(game, "Survival of the Fittest", "Judge Gift Program", "pJGP");
  }
}

module.exports = SurvivaloftheFittest;
