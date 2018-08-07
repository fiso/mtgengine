"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManifoldInsights extends UnimplementedCard {
  constructor (game) {
    super(game, "Manifold Insights", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ManifoldInsights;
