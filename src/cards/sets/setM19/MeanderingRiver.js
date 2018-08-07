"use strict";
const Constants = require ("../../../Constants");
const MeanderingRiverBase = require("../setC18/MeanderingRiver");

class MeanderingRiver extends MeanderingRiverBase {
  constructor (game) {
    super(game, "Meandering River", "Core Set 2019", "M19");
  }
}

module.exports = MeanderingRiver;
