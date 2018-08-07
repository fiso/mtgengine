"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smother extends UnimplementedCard {
  constructor (game) {
    super(game, "Smother", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = Smother;
