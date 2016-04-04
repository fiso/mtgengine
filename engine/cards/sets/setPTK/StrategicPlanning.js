"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrategicPlanningBase = require("../setC13/StrategicPlanning.js");

class StrategicPlanning extends StrategicPlanningBase {
  constructor(game) {
    super(game, "Strategic Planning", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StrategicPlanning;
