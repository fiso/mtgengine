"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCohort extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Cohort", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GoblinCohort;
