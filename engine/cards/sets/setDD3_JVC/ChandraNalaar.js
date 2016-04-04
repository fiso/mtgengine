"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChandraNalaar extends Card {
  constructor(game) {
    super(game, "Chandra Nalaar", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ChandraNalaar;
