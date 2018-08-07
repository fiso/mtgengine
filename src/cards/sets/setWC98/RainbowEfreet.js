"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainbowEfreet extends UnimplementedCard {
  constructor (game) {
    super(game, "Rainbow Efreet", "World Championship Decks 1998", "WC98");
  }
}

module.exports = RainbowEfreet;
