"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishEulogist extends Card {
  constructor(game) {
    super(game, "Elvish Eulogist", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishEulogist;
