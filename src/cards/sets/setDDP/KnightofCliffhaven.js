"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofCliffhaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of Cliffhaven", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KnightofCliffhaven;
