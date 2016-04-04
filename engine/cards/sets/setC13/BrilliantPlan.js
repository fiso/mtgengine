"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrilliantPlan extends Card {
  constructor(game) {
    super(game, "Brilliant Plan", "Commander 2013 Edition", "C13");
  }
}

module.exports = BrilliantPlan;
