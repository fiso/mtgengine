"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalRod extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Rod", "Eighth Edition", "8ED");
  }
}

module.exports = CrystalRod;
