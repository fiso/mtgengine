"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystallineNautilus extends UnimplementedCard {
  constructor(game) {
    super(game, "Crystalline Nautilus", "Journey into Nyx", "JOU");
  }
}

module.exports = CrystallineNautilus;
