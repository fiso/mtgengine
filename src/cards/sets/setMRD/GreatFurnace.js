"use strict";
const Constants = require ("../../../Constants");
const GreatFurnaceBase = require("../setC14/GreatFurnace");

class GreatFurnace extends GreatFurnaceBase {
  constructor(game) {
    super(game, "Great Furnace", "Mirrodin", "MRD");
  }
}

module.exports = GreatFurnace;
