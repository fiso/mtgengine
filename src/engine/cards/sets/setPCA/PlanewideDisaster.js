"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanewideDisaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Planewide Disaster", "Planechase Anthology", "PCA");
  }
}

module.exports = PlanewideDisaster;
