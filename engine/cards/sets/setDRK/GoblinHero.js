"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinHeroBase = require("../setATH/GoblinHero.js");

class GoblinHero extends GoblinHeroBase {
  constructor(game) {
    super(game, "Goblin Hero", "The Dark", "DRK");
  }
}

module.exports = GoblinHero;
