"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrypticSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptic Serpent", "Amonkhet", "AKH");
  }
}

module.exports = CrypticSerpent;
