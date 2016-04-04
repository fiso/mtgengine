"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimordialHydra extends Card {
  constructor(game) {
    super(game, "Primordial Hydra", "Magic 2012", "M12");
  }
}

module.exports = PrimordialHydra;
