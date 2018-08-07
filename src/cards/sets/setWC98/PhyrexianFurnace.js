"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianFurnace extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Furnace", "World Championship Decks 1998", "WC98");
  }
}

module.exports = PhyrexianFurnace;
