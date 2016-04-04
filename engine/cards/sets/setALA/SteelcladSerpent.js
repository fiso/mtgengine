"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelcladSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Steelclad Serpent", "Shards of Alara", "ALA");
  }
}

module.exports = SteelcladSerpent;
