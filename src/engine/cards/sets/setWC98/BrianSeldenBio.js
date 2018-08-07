"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrianSeldenBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Brian Selden Bio", "World Championship Decks 1998", "WC98");
  }
}

module.exports = BrianSeldenBio;
