"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeskai Elder", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = JeskaiElder;
