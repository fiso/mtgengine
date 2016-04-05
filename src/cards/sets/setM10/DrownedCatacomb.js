"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownedCatacomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Drowned Catacomb", "Magic 2010", "M10");
  }
}

module.exports = DrownedCatacomb;
