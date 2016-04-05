"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlameElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Flame Elemental", "Mirage", "MIR");
  }
}

module.exports = FlameElemental;
