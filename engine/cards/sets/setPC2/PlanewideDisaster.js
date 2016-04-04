"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlanewideDisaster extends Card {
  constructor(game) {
    super(game, "Planewide Disaster", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = PlanewideDisaster;
