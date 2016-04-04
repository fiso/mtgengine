"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasilicaGuards extends UnimplementedCard {
  constructor(game) {
    super(game, "Basilica Guards", "Gatecrash", "GTC");
  }
}

module.exports = BasilicaGuards;
