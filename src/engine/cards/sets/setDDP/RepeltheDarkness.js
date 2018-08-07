"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepeltheDarkness extends UnimplementedCard {
  constructor (game) {
    super(game, "Repel the Darkness", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RepeltheDarkness;
