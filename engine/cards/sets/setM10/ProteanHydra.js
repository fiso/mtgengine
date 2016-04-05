"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteanHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Protean Hydra", "Magic 2010", "M10");
  }
}

module.exports = ProteanHydra;
