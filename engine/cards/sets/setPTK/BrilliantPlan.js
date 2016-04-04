"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrilliantPlanBase = require("../setC13/BrilliantPlan.js");

class BrilliantPlan extends BrilliantPlanBase {
  constructor(game) {
    super(game, "Brilliant Plan", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BrilliantPlan;
