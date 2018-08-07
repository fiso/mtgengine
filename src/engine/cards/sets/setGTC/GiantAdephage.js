"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantAdephage extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Adephage", "Gatecrash", "GTC");
  }
}

module.exports = GiantAdephage;
