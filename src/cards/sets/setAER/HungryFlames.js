"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungryFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungry Flames", "Aether Revolt", "AER");
  }
}

module.exports = HungryFlames;
