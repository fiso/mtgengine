"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame Burst", "Odyssey", "ODY");
  }
}

module.exports = FlameBurst;
