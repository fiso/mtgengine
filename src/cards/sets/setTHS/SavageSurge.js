"use strict";
const Constants = require ("../../../Constants");
const SavageSurgeBase = require("../setRTR/SavageSurge");

class SavageSurge extends SavageSurgeBase {
  constructor (game) {
    super(game, "Savage Surge", "Theros", "THS");
  }
}

module.exports = SavageSurge;
