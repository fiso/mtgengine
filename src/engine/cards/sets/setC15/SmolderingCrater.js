"use strict";
const Constants = require ("../../../Constants");
const SmolderingCraterBase = require("../setCM2/SmolderingCrater");

class SmolderingCrater extends SmolderingCraterBase {
  constructor (game) {
    super(game, "Smoldering Crater", "Commander 2015", "C15");
  }
}

module.exports = SmolderingCrater;
