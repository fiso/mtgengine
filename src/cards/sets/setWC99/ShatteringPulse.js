"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteringPulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Shattering Pulse", "World Championship Decks 1999", "WC99");
  }
}

module.exports = ShatteringPulse;
