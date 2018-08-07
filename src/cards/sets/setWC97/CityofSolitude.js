"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofSolitude extends UnimplementedCard {
  constructor (game) {
    super(game, "City of Solitude", "World Championship Decks 1997", "WC97");
  }
}

module.exports = CityofSolitude;
