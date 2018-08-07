"use strict";
const Constants = require ("../../../Constants");
const FrogLizardBase = require("../setTC15/FrogLizard");

class FrogLizard extends FrogLizardBase {
  constructor (game) {
    super(game, "Frog Lizard", "Gatecrash Tokens", "TGTC");
  }
}

module.exports = FrogLizard;
