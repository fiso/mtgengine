"use strict";
const Constants = require ("../../../Constants");
const BrilliantPlanBase = require("../setC13/BrilliantPlan");

class BrilliantPlan extends BrilliantPlanBase {
  constructor(game) {
    super(game, "Brilliant Plan", "Masters Edition III", "ME3");
  }
}

module.exports = BrilliantPlan;
