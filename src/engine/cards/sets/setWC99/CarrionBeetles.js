"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionBeetles extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Beetles", "World Championship Decks 1999", "WC99");
  }
}

module.exports = CarrionBeetles;
