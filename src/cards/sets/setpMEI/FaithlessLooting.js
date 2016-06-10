"use strict";
const Constants = require ("../../../Constants");
const FaithlessLootingBase = require("../setC14/FaithlessLooting");

class FaithlessLooting extends FaithlessLootingBase {
  constructor (game) {
    super(game, "Faithless Looting", "Media Inserts", "pMEI");
  }
}

module.exports = FaithlessLooting;
