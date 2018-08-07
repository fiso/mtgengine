"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RekindlingPhoenix extends UnimplementedCard {
  constructor (game) {
    super(game, "Rekindling Phoenix", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = RekindlingPhoenix;
