"use strict";
const Constants = require ("../../../Constants");
const StrategicPlanningBase = require("../setHOU/StrategicPlanning");

class StrategicPlanning extends StrategicPlanningBase {
  constructor (game) {
    super(game, "Strategic Planning", "Masters Edition III", "ME3");
  }
}

module.exports = StrategicPlanning;
