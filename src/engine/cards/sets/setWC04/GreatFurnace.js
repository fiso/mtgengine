"use strict";
const Constants = require ("../../../Constants");
const GreatFurnaceBase = require("../setC18/GreatFurnace");

class GreatFurnace extends GreatFurnaceBase {
  constructor (game) {
    super(game, "Great Furnace", "World Championship Decks 2004", "WC04");
  }
}

module.exports = GreatFurnace;
