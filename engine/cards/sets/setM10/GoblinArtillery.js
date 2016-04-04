"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinArtillery extends Card {
  constructor(game) {
    super(game, "Goblin Artillery", "Magic 2010", "M10");
  }
}

module.exports = GoblinArtillery;
