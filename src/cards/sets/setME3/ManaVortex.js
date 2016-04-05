"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaVortex extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Vortex", "Masters Edition III", "ME3");
  }
}

module.exports = ManaVortex;
