"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonyCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Ebony Charm", "World Championship Decks 1997", "WC97");
  }
}

module.exports = EbonyCharm;
