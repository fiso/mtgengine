"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Water Elemental", "Masters Edition IV", "ME4");
  }
}

module.exports = WaterElemental;
