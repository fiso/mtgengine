"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimordialHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Primordial Hydra", "Magic 2013", "M13");
  }
}

module.exports = PrimordialHydra;
