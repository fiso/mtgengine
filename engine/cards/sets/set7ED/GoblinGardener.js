"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGardener extends Card {
  constructor(game) {
    super(game, "Goblin Gardener", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinGardener;
