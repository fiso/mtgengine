"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatacombSifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Catacomb Sifter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CatacombSifter;
