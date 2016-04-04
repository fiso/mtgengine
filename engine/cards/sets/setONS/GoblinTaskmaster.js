"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinTaskmaster extends Card {
  constructor(game) {
    super(game, "Goblin Taskmaster", "Onslaught", "ONS");
  }
}

module.exports = GoblinTaskmaster;
