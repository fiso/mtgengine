"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarbleDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Marble Diamond", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = MarbleDiamond;
