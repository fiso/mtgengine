"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalGyrfalcon extends UnimplementedCard {
  constructor(game) {
    super(game, "Loyal Gyrfalcon", "Eventide", "EVE");
  }
}

module.exports = LoyalGyrfalcon;
