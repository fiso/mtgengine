"use strict";
const Constants = require ("../../../Constants");
const SmolderingCraterBase = require("../setCM2/SmolderingCrater");

class SmolderingCrater extends SmolderingCraterBase {
  constructor (game) {
    super(game, "Smoldering Crater", "Commander 2014", "C14");
  }
}

module.exports = SmolderingCrater;
