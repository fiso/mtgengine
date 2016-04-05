"use strict";
const Constants = require ("../../../Constants");
const SavageTwisterBase = require("../setARC/SavageTwister");

class SavageTwister extends SavageTwisterBase {
  constructor(game) {
    super(game, "Savage Twister", "Commander 2013 Edition", "C13");
  }
}

module.exports = SavageTwister;
