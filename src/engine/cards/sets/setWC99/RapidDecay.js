"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapidDecay extends UnimplementedCard {
  constructor (game) {
    super(game, "Rapid Decay", "World Championship Decks 1999", "WC99");
  }
}

module.exports = RapidDecay;
