"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalRod extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystal Rod", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CrystalRod;
