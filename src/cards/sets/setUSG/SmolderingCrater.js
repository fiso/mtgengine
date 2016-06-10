"use strict";
const Constants = require ("../../../Constants");
const SmolderingCraterBase = require("../setATH/SmolderingCrater");

class SmolderingCrater extends SmolderingCraterBase {
  constructor (game) {
    super(game, "Smoldering Crater", "Urza's Saga", "USG");
  }
}

module.exports = SmolderingCrater;
