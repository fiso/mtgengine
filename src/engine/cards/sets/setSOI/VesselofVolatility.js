"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesselofVolatility extends UnimplementedCard {
  constructor (game) {
    super(game, "Vessel of Volatility", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VesselofVolatility;
