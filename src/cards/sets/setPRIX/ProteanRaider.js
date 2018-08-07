"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteanRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Protean Raider", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = ProteanRaider;
