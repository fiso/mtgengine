"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Submerge extends UnimplementedCard {
  constructor (game) {
    super(game, "Submerge", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Submerge;
