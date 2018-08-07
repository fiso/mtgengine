"use strict";
const Constants = require ("../../../Constants");
const GaeasRevengeBase = require("../setPORI/GaeasRevenge");

class GaeasRevenge extends GaeasRevengeBase {
  constructor (game) {
    super(game, "Gaea's Revenge", "Magic 2011", "M11");
  }
}

module.exports = GaeasRevenge;
