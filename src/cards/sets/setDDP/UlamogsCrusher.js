"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlamogsCrusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Ulamog's Crusher", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = UlamogsCrusher;
