"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeraldCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Emerald Charm", "World Championship Decks 1998", "WC98");
  }
}

module.exports = EmeraldCharm;
