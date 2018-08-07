"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherfluxReservoir extends UnimplementedCard {
  constructor (game) {
    super(game, "Aetherflux Reservoir", "Kaladesh", "KLD");
  }
}

module.exports = AetherfluxReservoir;
