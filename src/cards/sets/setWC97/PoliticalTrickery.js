"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoliticalTrickery extends UnimplementedCard {
  constructor (game) {
    super(game, "Political Trickery", "World Championship Decks 1997", "WC97");
  }
}

module.exports = PoliticalTrickery;
