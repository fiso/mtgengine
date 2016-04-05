"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentedHero extends UnimplementedCard {
  constructor(game) {
    super(game, "Tormented Hero", "Friday Night Magic", "pFNM");
  }
}

module.exports = TormentedHero;
