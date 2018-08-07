"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Galvanic Blast", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = GalvanicBlast;
