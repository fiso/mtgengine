"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PipersMelody extends UnimplementedCard {
  constructor (game) {
    super(game, "Piper's Melody", "Odyssey", "ODY");
  }
}

module.exports = PipersMelody;
