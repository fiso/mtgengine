"use strict";
const Constants = require ("../../../Constants");
const BloodstainedMireBase = require("../setEXP/BloodstainedMire");

class BloodstainedMire extends BloodstainedMireBase {
  constructor (game) {
    super(game, "Bloodstained Mire", "World Championship Decks 2003", "WC03");
  }
}

module.exports = BloodstainedMire;
