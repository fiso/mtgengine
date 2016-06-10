"use strict";
const Constants = require ("../../../Constants");
const CopperCarapaceBase = require("../setMBS/CopperCarapace");

class CopperCarapace extends CopperCarapaceBase {
  constructor (game) {
    super(game, "Copper Carapace", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = CopperCarapace;
