"use strict";
const Constants = require ("../../../Constants");
const RiptideSurvivorBase = require("../setC14/RiptideSurvivor");

class RiptideSurvivor extends RiptideSurvivorBase {
  constructor(game) {
    super(game, "Riptide Survivor", "Scourge", "SCG");
  }
}

module.exports = RiptideSurvivor;
