"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Compulsion extends UnimplementedCard {
  constructor (game) {
    super(game, "Compulsion", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Compulsion;
