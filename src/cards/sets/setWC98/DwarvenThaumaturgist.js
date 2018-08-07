"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenThaumaturgist extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Thaumaturgist", "World Championship Decks 1998", "WC98");
  }
}

module.exports = DwarvenThaumaturgist;
