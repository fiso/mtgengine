"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavageTwisterBase = require("../setARC/SavageTwister.js");

class SavageTwister extends SavageTwisterBase {
  constructor(game) {
    super(game, "Savage Twister", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SavageTwister;
