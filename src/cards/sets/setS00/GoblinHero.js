"use strict";
const Constants = require ("../../../Constants");
const GoblinHeroBase = require("../setATH/GoblinHero");

class GoblinHero extends GoblinHeroBase {
  constructor (game) {
    super(game, "Goblin Hero", "Starter 2000", "S00");
  }
}

module.exports = GoblinHero;
