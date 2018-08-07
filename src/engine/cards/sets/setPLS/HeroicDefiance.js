"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroicDefiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Heroic Defiance", "Planeshift", "PLS");
  }
}

module.exports = HeroicDefiance;
