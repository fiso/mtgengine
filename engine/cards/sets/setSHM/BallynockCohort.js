"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallynockCohort extends UnimplementedCard {
  constructor(game) {
    super(game, "Ballynock Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = BallynockCohort;
