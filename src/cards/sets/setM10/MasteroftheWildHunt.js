"use strict";
const Constants = require ("../../../Constants");
const MasteroftheWildHuntBase = require("../setA25/MasteroftheWildHunt");

class MasteroftheWildHunt extends MasteroftheWildHuntBase {
  constructor (game) {
    super(game, "Master of the Wild Hunt", "Magic 2010", "M10");
  }
}

module.exports = MasteroftheWildHunt;
