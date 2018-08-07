"use strict";
const Constants = require ("../../../Constants");
const SavageSurgeBase = require("../setTHS/SavageSurge");

class SavageSurge extends SavageSurgeBase {
  constructor (game) {
    super(game, "Savage Surge", "Return to Ravnica", "RTR");
  }
}

module.exports = SavageSurge;
