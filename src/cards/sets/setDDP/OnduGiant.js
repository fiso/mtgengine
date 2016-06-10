"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnduGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ondu Giant", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = OnduGiant;
