"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hatred extends UnimplementedCard {
  constructor (game) {
    super(game, "Hatred", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Hatred;
