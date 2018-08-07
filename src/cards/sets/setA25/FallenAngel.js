"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallenAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Fallen Angel", "Masters 25", "A25");
  }
}

module.exports = FallenAngel;
