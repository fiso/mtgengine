"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdFurnace extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Furnace", "Planechase", "HOP");
  }
}

module.exports = StrongholdFurnace;
