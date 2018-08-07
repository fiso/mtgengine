"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Crypt Angel", "World Championship Decks 2001", "WC01");
  }
}

module.exports = CryptAngel;
