"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerosBlade extends Card {
  constructor(game) {
    super(game, "Hero's Blade", "Fate Reforged", "FRF");
  }
}

module.exports = HerosBlade;
