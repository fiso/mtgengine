"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofObligation extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of Obligation", "Gatecrash", "GTC");
  }
}

module.exports = KnightofObligation;
