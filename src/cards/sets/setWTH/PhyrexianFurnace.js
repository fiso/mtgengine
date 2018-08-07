"use strict";
const Constants = require ("../../../Constants");
const PhyrexianFurnaceBase = require("../setWC98/PhyrexianFurnace");

class PhyrexianFurnace extends PhyrexianFurnaceBase {
  constructor (game) {
    super(game, "Phyrexian Furnace", "Weatherlight", "WTH");
  }
}

module.exports = PhyrexianFurnace;
