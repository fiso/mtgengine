"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterWarcraftBase = require("../setCMD/MasterWarcraft.js");

class MasterWarcraft extends MasterWarcraftBase {
  constructor(game) {
    super(game, "Master Warcraft", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MasterWarcraft;
