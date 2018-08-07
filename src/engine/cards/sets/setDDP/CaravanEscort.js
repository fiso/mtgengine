"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaravanEscort extends UnimplementedCard {
  constructor (game) {
    super(game, "Caravan Escort", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = CaravanEscort;
