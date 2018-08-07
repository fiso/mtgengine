"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VonasHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Vona's Hunger", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = VonasHunger;
