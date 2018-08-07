"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Tolarian Emissary", "Invasion", "INV");
  }
}

module.exports = TolarianEmissary;
