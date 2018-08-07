"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AeronautTinkerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Aeronaut Tinkerer", "Magic 2015", "M15");
  }
}

module.exports = AeronautTinkerer;
