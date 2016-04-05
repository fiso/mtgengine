"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofPrimordium extends UnimplementedCard {
  constructor(game) {
    super(game, "Seal of Primordium", "Planar Chaos", "PLC");
  }
}

module.exports = SealofPrimordium;
