"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TarPitcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Tar Pitcher", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = TarPitcher;
