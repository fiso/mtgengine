"use strict";
const Constants = require ("../../../Constants");
const MasterofPearlsBase = require("../setKTK/MasterofPearls");

class MasterofPearls extends MasterofPearlsBase {
  constructor(game) {
    super(game, "Master of Pearls", "Prerelease Events", "pPRE");
  }
}

module.exports = MasterofPearls;
