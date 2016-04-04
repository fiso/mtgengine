"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatacombSifter extends Card {
  constructor(game) {
    super(game, "Catacomb Sifter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CatacombSifter;
