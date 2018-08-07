"use strict";
const Constants = require ("../../../Constants");
const StrongholdFurnaceBase = require("../setPCA/StrongholdFurnace");

class StrongholdFurnace extends StrongholdFurnaceBase {
  constructor (game) {
    super(game, "Stronghold Furnace", "Planechase", "HOP");
  }
}

module.exports = StrongholdFurnace;
