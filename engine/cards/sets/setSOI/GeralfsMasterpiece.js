"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeralfsMasterpiece extends UnimplementedCard {
  constructor(game) {
    super(game, "Geralf's Masterpiece", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GeralfsMasterpiece;
