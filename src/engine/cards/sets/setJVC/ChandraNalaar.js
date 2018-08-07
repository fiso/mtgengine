"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandraNalaar extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra Nalaar", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = ChandraNalaar;
