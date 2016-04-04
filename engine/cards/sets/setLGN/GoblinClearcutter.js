"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinClearcutter extends Card {
  constructor(game) {
    super(game, "Goblin Clearcutter", "Legions", "LGN");
  }
}

module.exports = GoblinClearcutter;
