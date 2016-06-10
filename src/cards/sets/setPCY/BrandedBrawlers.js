"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrandedBrawlers extends UnimplementedCard {
  constructor (game) {
    super(game, "Branded Brawlers", "Prophecy", "PCY");
  }
}

module.exports = BrandedBrawlers;
