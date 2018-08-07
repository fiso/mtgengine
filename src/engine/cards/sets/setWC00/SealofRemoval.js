"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofRemoval extends UnimplementedCard {
  constructor (game) {
    super(game, "Seal of Removal", "World Championship Decks 2000", "WC00");
  }
}

module.exports = SealofRemoval;
