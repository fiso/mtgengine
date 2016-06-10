"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerosBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Hero's Blade", "Fate Reforged", "FRF");
  }
}

module.exports = HerosBlade;
