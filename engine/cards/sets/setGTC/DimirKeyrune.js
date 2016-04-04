"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirKeyrune extends UnimplementedCard {
  constructor(game) {
    super(game, "Dimir Keyrune", "Gatecrash", "GTC");
  }
}

module.exports = DimirKeyrune;
