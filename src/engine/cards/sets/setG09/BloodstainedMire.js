"use strict";
const Constants = require ("../../../Constants");
const BloodstainedMireBase = require("../setEXP/BloodstainedMire");

class BloodstainedMire extends BloodstainedMireBase {
  constructor (game) {
    super(game, "Bloodstained Mire", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = BloodstainedMire;
