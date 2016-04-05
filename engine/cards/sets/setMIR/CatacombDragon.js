"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatacombDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Catacomb Dragon", "Mirage", "MIR");
  }
}

module.exports = CatacombDragon;
