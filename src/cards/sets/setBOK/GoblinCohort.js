"use strict";
const Constants = require ("../../../Constants");
const GoblinCohortBase = require("../setEVG/GoblinCohort");

class GoblinCohort extends GoblinCohortBase {
  constructor (game) {
    super(game, "Goblin Cohort", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GoblinCohort;
