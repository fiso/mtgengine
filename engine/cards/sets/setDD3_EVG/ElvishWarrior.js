"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Warrior", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishWarrior;
