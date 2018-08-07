"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchersSupplier extends UnimplementedCard {
  constructor (game) {
    super(game, "Stitcher's Supplier", "Core Set 2019", "M19");
  }
}

module.exports = StitchersSupplier;
