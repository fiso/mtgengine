"use strict";
const Constants = require ("../../../Constants");
const FaithlessLootingBase = require("../setCM2/FaithlessLooting");

class FaithlessLooting extends FaithlessLootingBase {
  constructor (game) {
    super(game, "Faithless Looting", "Legendary Cube", "PZ1");
  }
}

module.exports = FaithlessLooting;
