"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Char extends UnimplementedCard {
  constructor (game) {
    super(game, "Char", "From the Vault: Twenty", "V13");
  }
}

module.exports = Char;
