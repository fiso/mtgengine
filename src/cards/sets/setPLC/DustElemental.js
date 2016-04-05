"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DustElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Dust Elemental", "Planar Chaos", "PLC");
  }
}

module.exports = DustElemental;
