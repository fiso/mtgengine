"use strict";
const Constants = require ("../../../Constants");
const PilferedPlansBase = require("../setMM3/PilferedPlans");

class PilferedPlans extends PilferedPlansBase {
  constructor (game) {
    super(game, "Pilfered Plans", "Dragon's Maze", "DGM");
  }
}

module.exports = PilferedPlans;
