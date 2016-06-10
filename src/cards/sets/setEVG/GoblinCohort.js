"use strict";
const Constants = require ("../../../Constants");
const GoblinCohortBase = require("../setBOK/GoblinCohort");

class GoblinCohort extends GoblinCohortBase {
  constructor (game) {
    super(game, "Goblin Cohort", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinCohort;
