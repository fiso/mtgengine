"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaCrypt extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Crypt", "Kaladesh Inventions", "MPS");
  }
}

module.exports = ManaCrypt;
