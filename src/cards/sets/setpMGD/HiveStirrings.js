"use strict";
const Constants = require ("../../../Constants");
const HiveStirringsBase = require("../setM14/HiveStirrings");

class HiveStirrings extends HiveStirringsBase {
  constructor (game) {
    super(game, "Hive Stirrings", "Magic Game Day", "pMGD");
  }
}

module.exports = HiveStirrings;
