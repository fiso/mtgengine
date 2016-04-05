"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HypersonicDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Hypersonic Dragon", "Prerelease Events", "pPRE");
  }
}

module.exports = HypersonicDragon;
