"use strict";
const Constants = require ("../../../Constants");
const BojukaBogBase = require("../setC18/BojukaBog");

class BojukaBog extends BojukaBogBase {
  constructor (game) {
    super(game, "Bojuka Bog", "Commander Anthology", "CMA");
  }
}

module.exports = BojukaBog;
