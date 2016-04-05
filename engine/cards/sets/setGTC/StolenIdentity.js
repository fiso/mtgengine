"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StolenIdentity extends UnimplementedCard {
  constructor(game) {
    super(game, "Stolen Identity", "Gatecrash", "GTC");
  }
}

module.exports = StolenIdentity;
