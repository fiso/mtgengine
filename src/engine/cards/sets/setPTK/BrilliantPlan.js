"use strict";
const Constants = require ("../../../Constants");
const BrilliantPlanBase = require("../setGS1/BrilliantPlan");

class BrilliantPlan extends BrilliantPlanBase {
  constructor (game) {
    super(game, "Brilliant Plan", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BrilliantPlan;
