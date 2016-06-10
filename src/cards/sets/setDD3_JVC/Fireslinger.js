"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireslinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Fireslinger", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Fireslinger;
