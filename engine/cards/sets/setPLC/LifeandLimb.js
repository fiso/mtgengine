"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LifeandLimb extends UnimplementedCard {
  constructor(game) {
    super(game, "Life and Limb", "Planar Chaos", "PLC");
  }
}

module.exports = LifeandLimb;
