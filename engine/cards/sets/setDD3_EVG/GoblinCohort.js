"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinCohortBase = require("../setBOK/GoblinCohort.js");

class GoblinCohort extends GoblinCohortBase {
  constructor(game) {
    super(game, "Goblin Cohort", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = GoblinCohort;
