"use strict";
const Constants = require ("../../../Constants");
const DimensionalInfiltratorBase = require("../setOGW/DimensionalInfiltrator");

class DimensionalInfiltrator extends DimensionalInfiltratorBase {
  constructor (game) {
    super(game, "Dimensional Infiltrator", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = DimensionalInfiltrator;
