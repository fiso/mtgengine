"use strict";
const Constants = require ("../../../Constants");
const UnclaimedTerritoryBase = require("../setXLN/UnclaimedTerritory");

class UnclaimedTerritory extends UnclaimedTerritoryBase {
  constructor (game) {
    super(game, "Unclaimed Territory", "Ixalan Promos", "PXLN");
  }
}

module.exports = UnclaimedTerritory;
