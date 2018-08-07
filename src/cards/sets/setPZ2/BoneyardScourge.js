"use strict";
const Constants = require ("../../../Constants");
const BoneyardScourgeBase = require("../setC17/BoneyardScourge");

class BoneyardScourge extends BoneyardScourgeBase {
  constructor (game) {
    super(game, "Boneyard Scourge", "You Make the Cube", "PZ2");
  }
}

module.exports = BoneyardScourge;
