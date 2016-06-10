"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AugerSpree extends UnimplementedCard {
  constructor (game) {
    super(game, "Auger Spree", "Return to Ravnica", "RTR");
  }
}

module.exports = AugerSpree;
