"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalVein extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystal Vein", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrystalVein;
