"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RampagingBalothsBase = require("../setC13/RampagingBaloths.js");

class RampagingBaloths extends RampagingBalothsBase {
  constructor(game) {
    super(game, "Rampaging Baloths", "Zendikar", "ZEN");
  }
}

module.exports = RampagingBaloths;
