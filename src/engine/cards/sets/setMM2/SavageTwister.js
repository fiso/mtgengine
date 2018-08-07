"use strict";
const Constants = require ("../../../Constants");
const SavageTwisterBase = require("../setC18/SavageTwister");

class SavageTwister extends SavageTwisterBase {
  constructor (game) {
    super(game, "Savage Twister", "Modern Masters 2015", "MM2");
  }
}

module.exports = SavageTwister;
