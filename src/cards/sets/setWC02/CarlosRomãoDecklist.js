"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarlosRomãoDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Carlos Romão Decklist", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CarlosRomãoDecklist;
