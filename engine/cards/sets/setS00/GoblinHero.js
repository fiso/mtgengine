"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinHeroBase = require("../setATH/GoblinHero.js");

class GoblinHero extends GoblinHeroBase {
  constructor(game) {
    super(game, "Goblin Hero", "Starter 2000", "S00");
  }
}

module.exports = GoblinHero;
