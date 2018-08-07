"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwaggeringCorsair extends UnimplementedCard {
  constructor (game) {
    super(game, "Swaggering Corsair", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SwaggeringCorsair;
