"use strict";
const Constants = require ("../../../Constants");
const SmolderingCraterBase = require("../setCM2/SmolderingCrater");

class SmolderingCrater extends SmolderingCraterBase {
  constructor (game) {
    super(game, "Smoldering Crater", "Anthologies", "ATH");
  }
}

module.exports = SmolderingCrater;
