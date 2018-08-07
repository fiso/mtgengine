"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scald extends UnimplementedCard {
  constructor (game) {
    super(game, "Scald", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Scald;
