"use strict";
const Constants = require ("../../../Constants");
const AmberPrisonBase = require("../set6ED/AmberPrison");

class AmberPrison extends AmberPrisonBase {
  constructor(game) {
    super(game, "Amber Prison", "Mirage", "MIR");
  }
}

module.exports = AmberPrison;
