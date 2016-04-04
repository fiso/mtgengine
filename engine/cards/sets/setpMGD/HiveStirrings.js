"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HiveStirringsBase = require("../setM14/HiveStirrings.js");

class HiveStirrings extends HiveStirringsBase {
  constructor(game) {
    super(game, "Hive Stirrings", "Magic Game Day", "pMGD");
  }
}

module.exports = HiveStirrings;
