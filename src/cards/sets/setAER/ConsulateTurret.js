"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsulateTurret extends UnimplementedCard {
  constructor (game) {
    super(game, "Consulate Turret", "Aether Revolt", "AER");
  }
}

module.exports = ConsulateTurret;
