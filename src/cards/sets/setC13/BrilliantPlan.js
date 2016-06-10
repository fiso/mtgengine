"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrilliantPlan extends UnimplementedCard {
  constructor (game) {
    super(game, "Brilliant Plan", "Commander 2013 Edition", "C13");
  }
}

module.exports = BrilliantPlan;
