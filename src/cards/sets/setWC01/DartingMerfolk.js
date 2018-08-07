"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DartingMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Darting Merfolk", "World Championship Decks 2001", "WC01");
  }
}

module.exports = DartingMerfolk;
