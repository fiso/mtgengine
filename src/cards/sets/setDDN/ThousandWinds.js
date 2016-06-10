"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThousandWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Thousand Winds", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ThousandWinds;
