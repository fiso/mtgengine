"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrQuadropod extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Quadropod", "Fifth Dawn", "5DN");
  }
}

module.exports = MyrQuadropod;
