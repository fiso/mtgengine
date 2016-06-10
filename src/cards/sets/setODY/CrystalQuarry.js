"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalQuarry extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Quarry", "Odyssey", "ODY");
  }
}

module.exports = CrystalQuarry;
