"use strict";
const Constants = require ("../../../Constants");
const PhyrexianFurnaceBase = require("../setWC98/PhyrexianFurnace");

class PhyrexianFurnace extends PhyrexianFurnaceBase {
  constructor (game) {
    super(game, "Phyrexian Furnace", "World Championship Decks 1997", "WC97");
  }
}

module.exports = PhyrexianFurnace;
