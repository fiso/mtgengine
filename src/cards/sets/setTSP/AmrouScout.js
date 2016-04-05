"use strict";
const Constants = require ("../../../Constants");
const AmrouScoutBase = require("../setMMA/AmrouScout");

class AmrouScout extends AmrouScoutBase {
  constructor(game) {
    super(game, "Amrou Scout", "Time Spiral", "TSP");
  }
}

module.exports = AmrouScout;
