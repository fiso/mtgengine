"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasureTroveBase = require("../set8ED/TreasureTrove.js");

class TreasureTrove extends TreasureTroveBase {
  constructor(game) {
    super(game, "Treasure Trove", "Ninth Edition", "9ED");
  }
}

module.exports = TreasureTrove;
