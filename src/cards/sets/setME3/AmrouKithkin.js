"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmrouKithkin extends UnimplementedCard {
  constructor (game) {
    super(game, "Amrou Kithkin", "Masters Edition III", "ME3");
  }
}

module.exports = AmrouKithkin;
