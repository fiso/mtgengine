"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DranasEmissary extends UnimplementedCard {
  constructor(game) {
    super(game, "Drana's Emissary", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DranasEmissary;
