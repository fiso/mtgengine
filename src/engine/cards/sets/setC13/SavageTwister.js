"use strict";
const Constants = require ("../../../Constants");
const SavageTwisterBase = require("../setC18/SavageTwister");

class SavageTwister extends SavageTwisterBase {
  constructor (game) {
    super(game, "Savage Twister", "Commander 2013", "C13");
  }
}

module.exports = SavageTwister;
