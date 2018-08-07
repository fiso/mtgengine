"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadDog extends UnimplementedCard {
  constructor (game) {
    super(game, "Mad Dog", "Odyssey", "ODY");
  }
}

module.exports = MadDog;
