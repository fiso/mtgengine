"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wildsize extends Card {
  constructor(game) {
    super(game, "Wildsize", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Wildsize;
