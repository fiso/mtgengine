"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Crypt Rats", "Seventh Edition", "7ED");
  }
}

module.exports = CryptRats;
