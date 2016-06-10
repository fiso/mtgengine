"use strict";
const Constants = require ("../../../Constants");
const AmrouSeekersBase = require("../setMMA/AmrouSeekers");

class AmrouSeekers extends AmrouSeekersBase {
  constructor (game) {
    super(game, "Amrou Seekers", "Time Spiral", "TSP");
  }
}

module.exports = AmrouSeekers;
