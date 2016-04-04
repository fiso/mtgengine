"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishPromenade extends Card {
  constructor(game) {
    super(game, "Elvish Promenade", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = ElvishPromenade;
