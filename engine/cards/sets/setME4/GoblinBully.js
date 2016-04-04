"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBully extends Card {
  constructor(game) {
    super(game, "Goblin Bully", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinBully;
