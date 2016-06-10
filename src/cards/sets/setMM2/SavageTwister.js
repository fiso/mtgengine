"use strict";
const Constants = require ("../../../Constants");
const SavageTwisterBase = require("../setARC/SavageTwister");

class SavageTwister extends SavageTwisterBase {
  constructor (game) {
    super(game, "Savage Twister", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SavageTwister;
