"use strict";
const Constants = require ("../../../Constants");
const TreasureTroveBase = require("../set8ED/TreasureTrove");

class TreasureTrove extends TreasureTroveBase {
  constructor(game) {
    super(game, "Treasure Trove", "Seventh Edition", "7ED");
  }
}

module.exports = TreasureTrove;
