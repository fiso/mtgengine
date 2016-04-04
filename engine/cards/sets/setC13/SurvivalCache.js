"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurvivalCache extends Card {
  constructor(game) {
    super(game, "Survival Cache", "Commander 2013 Edition", "C13");
  }
}

module.exports = SurvivalCache;
