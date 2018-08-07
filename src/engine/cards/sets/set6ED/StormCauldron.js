"use strict";
const Constants = require ("../../../Constants");
const StormCauldronBase = require("../set7ED/StormCauldron");

class StormCauldron extends StormCauldronBase {
  constructor (game) {
    super(game, "Storm Cauldron", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StormCauldron;
