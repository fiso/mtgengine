"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCaves extends Card {
  constructor(game) {
    super(game, "Goblin Caves", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinCaves;
