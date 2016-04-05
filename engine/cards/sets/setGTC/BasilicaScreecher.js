"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasilicaScreecher extends UnimplementedCard {
  constructor(game) {
    super(game, "Basilica Screecher", "Gatecrash", "GTC");
  }
}

module.exports = BasilicaScreecher;
