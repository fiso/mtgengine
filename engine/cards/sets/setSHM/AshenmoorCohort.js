"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshenmoorCohort extends Card {
  constructor(game) {
    super(game, "Ashenmoor Cohort", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorCohort;
