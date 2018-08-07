"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrilliantPlan extends UnimplementedCard {
  constructor (game) {
    super(game, "Brilliant Plan", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = BrilliantPlan;
