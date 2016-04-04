"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MortusStrider extends UnimplementedCard {
  constructor(game) {
    super(game, "Mortus Strider", "Gatecrash", "GTC");
  }
}

module.exports = MortusStrider;
