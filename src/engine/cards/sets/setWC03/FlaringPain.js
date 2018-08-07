"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlaringPain extends UnimplementedCard {
  constructor (game) {
    super(game, "Flaring Pain", "World Championship Decks 2003", "WC03");
  }
}

module.exports = FlaringPain;
