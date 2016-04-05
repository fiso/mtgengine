"use strict";
const Constants = require ("../../../Constants");
const TreasureTroveBase = require("../set8ED/TreasureTrove");

class TreasureTrove extends TreasureTroveBase {
  constructor(game) {
    super(game, "Treasure Trove", "Ninth Edition", "9ED");
  }
}

module.exports = TreasureTrove;
