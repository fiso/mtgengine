"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheEonFog extends UnimplementedCard {
  constructor(game) {
    super(game, "The Eon Fog", "Planechase", "HOP");
  }
}

module.exports = TheEonFog;
