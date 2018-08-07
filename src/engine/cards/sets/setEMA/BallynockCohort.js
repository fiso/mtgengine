"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BallynockCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Ballynock Cohort", "Eternal Masters", "EMA");
  }
}

module.exports = BallynockCohort;
