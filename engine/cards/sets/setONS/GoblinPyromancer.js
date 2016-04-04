"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinPyromancer extends Card {
  constructor(game) {
    super(game, "Goblin Pyromancer", "Onslaught", "ONS");
  }
}

module.exports = GoblinPyromancer;
