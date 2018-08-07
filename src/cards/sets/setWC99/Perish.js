"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Perish extends UnimplementedCard {
  constructor (game) {
    super(game, "Perish", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Perish;
