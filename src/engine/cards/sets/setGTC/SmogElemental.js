"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmogElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Smog Elemental", "Gatecrash", "GTC");
  }
}

module.exports = SmogElemental;
