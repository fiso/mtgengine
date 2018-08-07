"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteanHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Protean Hydra", "Magic 2011", "M11");
  }
}

module.exports = ProteanHydra;
