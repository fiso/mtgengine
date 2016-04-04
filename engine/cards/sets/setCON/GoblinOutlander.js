"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinOutlander extends Card {
  constructor(game) {
    super(game, "Goblin Outlander", "Conflux", "CON");
  }
}

module.exports = GoblinOutlander;
