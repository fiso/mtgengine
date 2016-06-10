"use strict";
const Constants = require ("../../../Constants");
const StrategicPlanningBase = require("../setC13/StrategicPlanning");

class StrategicPlanning extends StrategicPlanningBase {
  constructor (game) {
    super(game, "Strategic Planning", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StrategicPlanning;
