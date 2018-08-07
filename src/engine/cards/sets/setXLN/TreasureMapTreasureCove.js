"use strict";
const Constants = require ("../../../Constants");
const TreasureMapTreasureCoveBase = require("../setPXTC/TreasureMapTreasureCove");

class TreasureMapTreasureCove extends TreasureMapTreasureCoveBase {
  constructor (game) {
    super(game, "Treasure Map // Treasure Cove", "Ixalan", "XLN");
  }
}

module.exports = TreasureMapTreasureCove;
