"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentedHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Tormented Hero", "Friday Night Magic 2014", "F14");
  }
}

module.exports = TormentedHero;
