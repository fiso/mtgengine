"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeveredStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Fevered Strength", "Masters Edition III", "ME3");
  }
}

module.exports = FeveredStrength;
