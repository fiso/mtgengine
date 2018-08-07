"use strict";
const Constants = require ("../../../Constants");
const MasterWarcraftBase = require("../setCMA/MasterWarcraft");

class MasterWarcraft extends MasterWarcraftBase {
  constructor (game) {
    super(game, "Master Warcraft", "Commander 2011", "CMD");
  }
}

module.exports = MasterWarcraft;
