"use strict";
const Constants = require ("../../../Constants");
const DeadMansChestBase = require("../setPRIX/DeadMansChest");

class DeadMansChest extends DeadMansChestBase {
  constructor (game) {
    super(game, "Dead Man's Chest", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DeadMansChest;
