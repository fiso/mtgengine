"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InduceDespair extends UnimplementedCard {
  constructor(game) {
    super(game, "Induce Despair", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = InduceDespair;
