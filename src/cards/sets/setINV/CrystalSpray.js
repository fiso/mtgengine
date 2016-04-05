"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalSpray extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystal Spray", "Invasion", "INV");
  }
}

module.exports = CrystalSpray;
