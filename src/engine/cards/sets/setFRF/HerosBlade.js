"use strict";
const Constants = require ("../../../Constants");
const HerosBladeBase = require("../setC17/HerosBlade");

class HerosBlade extends HerosBladeBase {
  constructor (game) {
    super(game, "Hero's Blade", "Fate Reforged", "FRF");
  }
}

module.exports = HerosBlade;
