"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritoftheNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit of the Night", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SpiritoftheNight;
