"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TotallyLost extends UnimplementedCard {
  constructor(game) {
    super(game, "Totally Lost", "Gatecrash", "GTC");
  }
}

module.exports = TotallyLost;
