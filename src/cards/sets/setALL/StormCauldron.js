"use strict";
const Constants = require ("../../../Constants");
const StormCauldronBase = require("../set7ED/StormCauldron");

class StormCauldron extends StormCauldronBase {
  constructor (game) {
    super(game, "Storm Cauldron", "Alliances", "ALL");
  }
}

module.exports = StormCauldron;
