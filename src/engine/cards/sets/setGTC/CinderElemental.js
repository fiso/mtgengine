"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Elemental", "Gatecrash", "GTC");
  }
}

module.exports = CinderElemental;
