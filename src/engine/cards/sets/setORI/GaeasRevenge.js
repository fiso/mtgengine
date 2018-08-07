"use strict";
const Constants = require ("../../../Constants");
const GaeasRevengeBase = require("../setPORI/GaeasRevenge");

class GaeasRevenge extends GaeasRevengeBase {
  constructor (game) {
    super(game, "Gaea's Revenge", "Magic Origins", "ORI");
  }
}

module.exports = GaeasRevenge;
