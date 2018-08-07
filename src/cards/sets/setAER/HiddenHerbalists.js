"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenHerbalists extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Herbalists", "Aether Revolt", "AER");
  }
}

module.exports = HiddenHerbalists;
