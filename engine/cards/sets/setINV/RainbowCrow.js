"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainbowCrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Rainbow Crow", "Invasion", "INV");
  }
}

module.exports = RainbowCrow;
