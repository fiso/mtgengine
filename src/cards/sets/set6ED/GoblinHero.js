"use strict";
const Constants = require ("../../../Constants");
const GoblinHeroBase = require("../setS00/GoblinHero");

class GoblinHero extends GoblinHeroBase {
  constructor (game) {
    super(game, "Goblin Hero", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinHero;
