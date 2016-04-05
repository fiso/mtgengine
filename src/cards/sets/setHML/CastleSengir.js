"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastleSengir extends UnimplementedCard {
  constructor(game) {
    super(game, "Castle Sengir", "Homelands", "HML");
  }
}

module.exports = CastleSengir;
