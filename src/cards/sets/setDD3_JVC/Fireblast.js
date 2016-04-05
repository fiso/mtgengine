"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Fireblast", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Fireblast;
