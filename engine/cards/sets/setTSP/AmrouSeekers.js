"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmrouSeekersBase = require("../setMMA/AmrouSeekers.js");

class AmrouSeekers extends AmrouSeekersBase {
  constructor(game) {
    super(game, "Amrou Seekers", "Time Spiral", "TSP");
  }
}

module.exports = AmrouSeekers;
