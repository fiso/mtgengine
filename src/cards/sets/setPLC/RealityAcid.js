"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityAcid extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Acid", "Planar Chaos", "PLC");
  }
}

module.exports = RealityAcid;
