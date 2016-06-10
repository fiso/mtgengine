"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandraNalaar extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra Nalaar", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ChandraNalaar;
