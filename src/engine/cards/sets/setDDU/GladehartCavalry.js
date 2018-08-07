"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GladehartCavalry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gladehart Cavalry", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = GladehartCavalry;
