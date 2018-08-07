"use strict";
const Constants = require ("../../../Constants");
const MeanderingRiverBase = require("../setC18/MeanderingRiver");

class MeanderingRiver extends MeanderingRiverBase {
  constructor (game) {
    super(game, "Meandering River", "Dominaria", "DOM");
  }
}

module.exports = MeanderingRiver;
