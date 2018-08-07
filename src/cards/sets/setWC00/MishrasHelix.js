"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasHelix extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Helix", "World Championship Decks 2000", "WC00");
  }
}

module.exports = MishrasHelix;
