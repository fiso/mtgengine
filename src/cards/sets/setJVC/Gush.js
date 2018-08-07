"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gush extends UnimplementedCard {
  constructor (game) {
    super(game, "Gush", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = Gush;
