"use strict";
const Constants = require ("../../../Constants");
const TreasureTroveBase = require("../set9ED/TreasureTrove");

class TreasureTrove extends TreasureTroveBase {
  constructor (game) {
    super(game, "Treasure Trove", "Eighth Edition", "8ED");
  }
}

module.exports = TreasureTrove;
