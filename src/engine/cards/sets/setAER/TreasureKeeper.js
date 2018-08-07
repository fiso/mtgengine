"use strict";
const Constants = require ("../../../Constants");
const TreasureKeeperBase = require("../setA25/TreasureKeeper");

class TreasureKeeper extends TreasureKeeperBase {
  constructor (game) {
    super(game, "Treasure Keeper", "Aether Revolt", "AER");
  }
}

module.exports = TreasureKeeper;
