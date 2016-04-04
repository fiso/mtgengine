"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishWarrior extends Card {
  constructor(game) {
    super(game, "Elvish Warrior", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishWarrior;
