"use strict";
const Constants = require ("../../../Constants");
const ThranTemporalGatewayBase = require("../setDOM/ThranTemporalGateway");

class ThranTemporalGateway extends ThranTemporalGatewayBase {
  constructor (game) {
    super(game, "Thran Temporal Gateway", "Dominaria Promos", "PDOM");
  }
}

module.exports = ThranTemporalGateway;
