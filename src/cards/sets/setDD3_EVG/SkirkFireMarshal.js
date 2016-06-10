"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkFireMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirk Fire Marshal", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SkirkFireMarshal;
