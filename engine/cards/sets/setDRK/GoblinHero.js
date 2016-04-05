"use strict";
const Constants = require ("../../../Constants");
const GoblinHeroBase = require("../setATH/GoblinHero");

class GoblinHero extends GoblinHeroBase {
  constructor(game) {
    super(game, "Goblin Hero", "The Dark", "DRK");
  }
}

module.exports = GoblinHero;
