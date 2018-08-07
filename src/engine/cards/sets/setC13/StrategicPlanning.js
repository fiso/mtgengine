"use strict";
const Constants = require ("../../../Constants");
const StrategicPlanningBase = require("../setHOU/StrategicPlanning");

class StrategicPlanning extends StrategicPlanningBase {
  constructor (game) {
    super(game, "Strategic Planning", "Commander 2013", "C13");
  }
}

module.exports = StrategicPlanning;
