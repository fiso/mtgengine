"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GatewayShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Gateway Shade", "Gatecrash", "GTC");
  }
}

module.exports = GatewayShade;
