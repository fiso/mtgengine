"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoorishCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Moorish Cavalry", "Arabian Nights", "ARN");
  }
}

module.exports = MoorishCavalry;
