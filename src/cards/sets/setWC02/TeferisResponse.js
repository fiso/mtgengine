"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisResponse extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Response", "World Championship Decks 2002", "WC02");
  }
}

module.exports = TeferisResponse;
