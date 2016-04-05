"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenesisHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Genesis Hydra", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GenesisHydra;
