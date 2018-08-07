"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheImmortalSun extends UnimplementedCard {
  constructor (game) {
    super(game, "The Immortal Sun", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = TheImmortalSun;
