"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpontaneousGeneration extends UnimplementedCard {
  constructor (game) {
    super(game, "Spontaneous Generation", "Mercadian Masques", "MMQ");
  }
}

module.exports = SpontaneousGeneration;
