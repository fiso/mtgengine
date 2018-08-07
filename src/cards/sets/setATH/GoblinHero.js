"use strict";
const Constants = require ("../../../Constants");
const GoblinHeroBase = require("../setS00/GoblinHero");

class GoblinHero extends GoblinHeroBase {
  constructor (game) {
    super(game, "Goblin Hero", "Anthologies", "ATH");
  }
}

module.exports = GoblinHero;
