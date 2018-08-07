"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StinkweedImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Stinkweed Imp", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = StinkweedImp;
