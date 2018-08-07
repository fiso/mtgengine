"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarlosRomãoBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Carlos Romão Bio", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CarlosRomãoBio;
