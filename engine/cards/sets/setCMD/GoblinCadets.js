"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinCadets extends Card {
  constructor(game) {
    super(game, "Goblin Cadets", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GoblinCadets;
