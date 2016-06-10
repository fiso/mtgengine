"use strict";
const Constants = require ("../../../Constants");
const TreasureHuntBase = require("../setpMPR/TreasureHunt");

class TreasureHunt extends TreasureHuntBase {
  constructor (game) {
    super(game, "Treasure Hunt", "Worldwake", "WWK");
  }
}

module.exports = TreasureHunt;
