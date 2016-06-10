"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ItThatBetrays extends UnimplementedCard {
  constructor (game) {
    super(game, "It That Betrays", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ItThatBetrays;
