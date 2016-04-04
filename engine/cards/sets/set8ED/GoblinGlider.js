"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGlider extends Card {
  constructor(game) {
    super(game, "Goblin Glider", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinGlider;
