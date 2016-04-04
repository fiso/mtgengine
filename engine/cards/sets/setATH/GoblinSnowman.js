"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSnowman extends Card {
  constructor(game) {
    super(game, "Goblin Snowman", "Anthologies", "ATH");
  }
}

module.exports = GoblinSnowman;
