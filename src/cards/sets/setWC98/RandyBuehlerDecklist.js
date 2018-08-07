"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RandyBuehlerDecklist extends UnimplementedCard {
  constructor (game) {
    super(game, "Randy Buehler Decklist", "World Championship Decks 1998", "WC98");
  }
}

module.exports = RandyBuehlerDecklist;
