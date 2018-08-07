"use strict";
const Constants = require ("../../../Constants");
const MeanderingRiverBase = require("../setC18/MeanderingRiver");

class MeanderingRiver extends MeanderingRiverBase {
  constructor (game) {
    super(game, "Meandering River", "Global Series Jiang Yanggu & Mu Yanling", "GS1");
  }
}

module.exports = MeanderingRiver;
