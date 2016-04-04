"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrilliantPlanBase = require("../setC13/BrilliantPlan.js");

class BrilliantPlan extends BrilliantPlanBase {
  constructor(game) {
    super(game, "Brilliant Plan", "Masters Edition III", "ME3");
  }
}

module.exports = BrilliantPlan;
