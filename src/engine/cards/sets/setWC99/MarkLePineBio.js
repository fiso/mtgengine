"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkLePineBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark Le Pine Bio", "World Championship Decks 1999", "WC99");
  }
}

module.exports = MarkLePineBio;
