"use strict";
const Constants = require ("../../../Constants");
const MadAuntieBase = require("../setLRW/MadAuntie");

class MadAuntie extends MadAuntieBase {
  constructor(game) {
    super(game, "Mad Auntie", "Modern Masters", "MMA");
  }
}

module.exports = MadAuntie;
