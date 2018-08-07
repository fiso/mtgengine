"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofFrost extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Frost", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = MartyrofFrost;
