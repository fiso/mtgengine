"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SavageSurgeBase = require("../setRTR/SavageSurge.js");

class SavageSurge extends SavageSurgeBase {
  constructor(game) {
    super(game, "Savage Surge", "Theros", "THS");
  }
}

module.exports = SavageSurge;
