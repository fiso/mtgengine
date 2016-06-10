"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggWarMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg War Marshal", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = MoggWarMarshal;
