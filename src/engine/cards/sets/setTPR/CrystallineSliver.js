"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystallineSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystalline Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = CrystallineSliver;
