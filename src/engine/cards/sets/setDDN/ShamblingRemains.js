"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingRemains extends UnimplementedCard {
  constructor (game) {
    super(game, "Shambling Remains", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ShamblingRemains;
