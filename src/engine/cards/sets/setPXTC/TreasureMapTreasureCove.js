"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureMapTreasureCove extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Map // Treasure Cove", "XLN Treasure Chest", "PXTC");
  }
}

module.exports = TreasureMapTreasureCove;
