"use strict";
const Constants = require ("../../../Constants");
const GreatFurnaceBase = require("../setC18/GreatFurnace");

class GreatFurnace extends GreatFurnaceBase {
  constructor (game) {
    super(game, "Great Furnace", "Commander 2014", "C14");
  }
}

module.exports = GreatFurnace;
