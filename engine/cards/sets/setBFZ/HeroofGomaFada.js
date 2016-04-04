"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroofGomaFada extends UnimplementedCard {
  constructor(game) {
    super(game, "Hero of Goma Fada", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HeroofGomaFada;
