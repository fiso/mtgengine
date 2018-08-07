"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrownedCatacomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Drowned Catacomb", "Ixalan", "XLN");
  }
}

module.exports = DrownedCatacomb;
