"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorozdaMonitor extends UnimplementedCard {
  constructor (game) {
    super(game, "Korozda Monitor", "Return to Ravnica", "RTR");
  }
}

module.exports = KorozdaMonitor;
