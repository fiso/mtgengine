"use strict";
const Constants = require ("../../../Constants");
const ManifoldInsightsBase = require("../setCM2/ManifoldInsights");

class ManifoldInsights extends ManifoldInsightsBase {
  constructor (game) {
    super(game, "Manifold Insights", "Commander 2016", "C16");
  }
}

module.exports = ManifoldInsights;
