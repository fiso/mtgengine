"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GatewayShade extends Card {
  constructor(game) {
    super(game, "Gateway Shade", "Gatecrash", "GTC");
  }
}

module.exports = GatewayShade;
