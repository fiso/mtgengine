"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalVein extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Vein", "Commander Anthology", "CMA");
  }
}

module.exports = CrystalVein;
