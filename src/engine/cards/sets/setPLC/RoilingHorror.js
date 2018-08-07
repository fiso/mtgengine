"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilingHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Roiling Horror", "Planar Chaos", "PLC");
  }
}

module.exports = RoilingHorror;
