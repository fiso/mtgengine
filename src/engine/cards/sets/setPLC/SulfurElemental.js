"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfurElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulfur Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = SulfurElemental;
