"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCohort extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Cohort", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = GoblinCohort;
