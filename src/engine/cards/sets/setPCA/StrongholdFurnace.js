"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdFurnace extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Furnace", "Planechase Anthology", "PCA");
  }
}

module.exports = StrongholdFurnace;
