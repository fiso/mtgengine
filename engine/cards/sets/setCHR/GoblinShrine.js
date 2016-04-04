"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinShrine extends Card {
  constructor(game) {
    super(game, "Goblin Shrine", "Chronicles", "CHR");
  }
}

module.exports = GoblinShrine;
