"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoongloveExtract extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonglove Extract", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = MoongloveExtract;
