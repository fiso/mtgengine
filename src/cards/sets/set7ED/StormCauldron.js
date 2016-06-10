"use strict";
const Constants = require ("../../../Constants");
const StormCauldronBase = require("../setALL/StormCauldron");

class StormCauldron extends StormCauldronBase {
  constructor (game) {
    super(game, "Storm Cauldron", "Seventh Edition", "7ED");
  }
}

module.exports = StormCauldron;
