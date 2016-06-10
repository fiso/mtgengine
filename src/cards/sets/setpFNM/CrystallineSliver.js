"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystallineSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystalline Sliver", "Friday Night Magic", "pFNM");
  }
}

module.exports = CrystallineSliver;
