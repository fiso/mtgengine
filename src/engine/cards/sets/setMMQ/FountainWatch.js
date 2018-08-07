"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FountainWatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Fountain Watch", "Mercadian Masques", "MMQ");
  }
}

module.exports = FountainWatch;
