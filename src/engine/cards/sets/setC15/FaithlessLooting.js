"use strict";
const Constants = require ("../../../Constants");
const FaithlessLootingBase = require("../setCM2/FaithlessLooting");

class FaithlessLooting extends FaithlessLootingBase {
  constructor (game) {
    super(game, "Faithless Looting", "Commander 2015", "C15");
  }
}

module.exports = FaithlessLooting;
