"use strict";
const Constants = require ("../../../Constants");
const BloodstainedMireBase = require("../setpJGP/BloodstainedMire");

class BloodstainedMire extends BloodstainedMireBase {
  constructor (game) {
    super(game, "Bloodstained Mire", "Zendikar Expedition", "EXP");
  }
}

module.exports = BloodstainedMire;
