"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyFog extends UnimplementedCard {
  constructor(game) {
    super(game, "Heavy Fog", "Masters Edition III", "ME3");
  }
}

module.exports = HeavyFog;
