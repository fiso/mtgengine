"use strict";
const Constants = require ("../../../Constants");
const GoblinCohortBase = require("../setEVG/GoblinCohort");

class GoblinCohort extends GoblinCohortBase {
  constructor (game) {
    super(game, "Goblin Cohort", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GoblinCohort;
