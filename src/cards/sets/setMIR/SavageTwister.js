"use strict";
const Constants = require ("../../../Constants");
const SavageTwisterBase = require("../setARC/SavageTwister");

class SavageTwister extends SavageTwisterBase {
  constructor (game) {
    super(game, "Savage Twister", "Mirage", "MIR");
  }
}

module.exports = SavageTwister;
