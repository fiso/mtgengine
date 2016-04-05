"use strict";
const Constants = require ("../../../Constants");
const HourofReckoningBase = require("../setCMD/HourofReckoning");

class HourofReckoning extends HourofReckoningBase {
  constructor(game) {
    super(game, "Hour of Reckoning", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HourofReckoning;
