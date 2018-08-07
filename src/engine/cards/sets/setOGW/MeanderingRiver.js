"use strict";
const Constants = require ("../../../Constants");
const MeanderingRiverBase = require("../setC18/MeanderingRiver");

class MeanderingRiver extends MeanderingRiverBase {
  constructor (game) {
    super(game, "Meandering River", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MeanderingRiver;
