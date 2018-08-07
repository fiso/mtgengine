"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegehornCeratops extends UnimplementedCard {
  constructor (game) {
    super(game, "Siegehorn Ceratops", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = SiegehornCeratops;
