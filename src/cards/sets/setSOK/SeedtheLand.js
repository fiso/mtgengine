"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeedtheLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Seed the Land", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SeedtheLand;
