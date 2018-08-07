"use strict";
const Constants = require ("../../../Constants");
const PlanewideDisasterBase = require("../setPCA/PlanewideDisaster");

class PlanewideDisaster extends PlanewideDisasterBase {
  constructor (game) {
    super(game, "Planewide Disaster", "Planechase 2012", "PC2");
  }
}

module.exports = PlanewideDisaster;
