"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Mists", "World Championship Decks 1997", "WC97");
  }
}

module.exports = KnightoftheMists;
