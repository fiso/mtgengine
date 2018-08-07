"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallofGemstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Hall of Gemstone", "World Championship Decks 1998", "WC98");
  }
}

module.exports = HallofGemstone;
