"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HourofReckoningBase = require("../setCMD/HourofReckoning.js");

class HourofReckoning extends HourofReckoningBase {
  constructor(game) {
    super(game, "Hour of Reckoning", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HourofReckoning;
