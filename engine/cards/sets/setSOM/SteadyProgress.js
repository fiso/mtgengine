"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SteadyProgressBase = require("../setMM2/SteadyProgress.js");

class SteadyProgress extends SteadyProgressBase {
  constructor(game) {
    super(game, "Steady Progress", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SteadyProgress;
