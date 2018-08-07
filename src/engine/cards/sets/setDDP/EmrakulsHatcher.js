"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmrakulsHatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Emrakul's Hatcher", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EmrakulsHatcher;
