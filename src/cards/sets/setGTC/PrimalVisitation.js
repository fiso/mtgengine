"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalVisitation extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Visitation", "Gatecrash", "GTC");
  }
}

module.exports = PrimalVisitation;
