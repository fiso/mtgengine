"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasureHuntBase = require("../setpMPR/TreasureHunt.js");

class TreasureHunt extends TreasureHuntBase {
  constructor(game) {
    super(game, "Treasure Hunt", "Media Inserts", "pMEI");
  }
}

module.exports = TreasureHunt;
