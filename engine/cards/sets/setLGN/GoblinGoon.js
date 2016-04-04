"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGoon extends Card {
  constructor(game) {
    super(game, "Goblin Goon", "Legions", "LGN");
  }
}

module.exports = GoblinGoon;
