"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TarPitcher extends Card {
  constructor(game) {
    super(game, "Tar Pitcher", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = TarPitcher;
