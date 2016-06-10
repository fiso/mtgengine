"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Herald", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = WirewoodHerald;
