"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodstainedMireBase = require("../setpJGP/BloodstainedMire.js");

class BloodstainedMire extends BloodstainedMireBase {
  constructor(game) {
    super(game, "Bloodstained Mire", "Onslaught", "ONS");
  }
}

module.exports = BloodstainedMire;
