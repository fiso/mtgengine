"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BallynockCohort extends Card {
  constructor(game) {
    super(game, "Ballynock Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = BallynockCohort;
