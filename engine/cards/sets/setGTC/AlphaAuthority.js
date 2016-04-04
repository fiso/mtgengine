"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaAuthority extends UnimplementedCard {
  constructor(game) {
    super(game, "Alpha Authority", "Gatecrash", "GTC");
  }
}

module.exports = AlphaAuthority;
