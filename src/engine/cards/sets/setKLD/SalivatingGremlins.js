"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalivatingGremlins extends UnimplementedCard {
  constructor (game) {
    super(game, "Salivating Gremlins", "Kaladesh", "KLD");
  }
}

module.exports = SalivatingGremlins;
