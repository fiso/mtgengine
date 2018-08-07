"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Rock Hydra", "Masters Edition IV", "ME4");
  }
}

module.exports = RockHydra;
