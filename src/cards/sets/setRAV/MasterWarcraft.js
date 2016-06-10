"use strict";
const Constants = require ("../../../Constants");
const MasterWarcraftBase = require("../setCMD/MasterWarcraft");

class MasterWarcraft extends MasterWarcraftBase {
  constructor (game) {
    super(game, "Master Warcraft", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MasterWarcraft;
