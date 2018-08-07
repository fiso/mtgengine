"use strict";
const Constants = require ("../../../Constants");
const GoblinHeroBase = require("../setS00/GoblinHero");

class GoblinHero extends GoblinHeroBase {
  constructor (game) {
    super(game, "Goblin Hero", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinHero;
