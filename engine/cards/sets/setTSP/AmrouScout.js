"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AmrouScoutBase = require("../setMMA/AmrouScout.js");

class AmrouScout extends AmrouScoutBase {
  constructor(game) {
    super(game, "Amrou Scout", "Time Spiral", "TSP");
  }
}

module.exports = AmrouScout;
