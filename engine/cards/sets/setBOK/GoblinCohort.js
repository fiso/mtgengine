"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCohort extends Card {
  constructor(game) {
    super(game, "Goblin Cohort", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GoblinCohort;
