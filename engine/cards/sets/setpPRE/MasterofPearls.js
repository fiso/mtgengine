"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterofPearlsBase = require("../setKTK/MasterofPearls.js");

class MasterofPearls extends MasterofPearlsBase {
  constructor(game) {
    super(game, "Master of Pearls", "Prerelease Events", "pPRE");
  }
}

module.exports = MasterofPearls;
