"use strict";
const Constants = require ("../../../Constants");
const GreatFurnaceBase = require("../setC18/GreatFurnace");

class GreatFurnace extends GreatFurnaceBase {
  constructor (game) {
    super(game, "Great Furnace", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = GreatFurnace;
