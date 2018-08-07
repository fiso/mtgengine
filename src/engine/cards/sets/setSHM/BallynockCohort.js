"use strict";
const Constants = require ("../../../Constants");
const BallynockCohortBase = require("../setEMA/BallynockCohort");

class BallynockCohort extends BallynockCohortBase {
  constructor (game) {
    super(game, "Ballynock Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = BallynockCohort;
