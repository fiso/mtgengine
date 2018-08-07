"use strict";
const Constants = require ("../../../Constants");
const BloodstainedMireBase = require("../setEXP/BloodstainedMire");

class BloodstainedMire extends BloodstainedMireBase {
  constructor (game) {
    super(game, "Bloodstained Mire", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodstainedMire;
