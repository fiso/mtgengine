"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenmoorCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashenmoor Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorCohort;
