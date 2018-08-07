"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RandyBuehlerBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Randy Buehler Bio", "World Championship Decks 1998", "WC98");
  }
}

module.exports = RandyBuehlerBio;
