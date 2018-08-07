"use strict";
const Constants = require ("../../../Constants");
const BrilliantPlanBase = require("../setGS1/BrilliantPlan");

class BrilliantPlan extends BrilliantPlanBase {
  constructor (game) {
    super(game, "Brilliant Plan", "Commander 2013", "C13");
  }
}

module.exports = BrilliantPlan;
