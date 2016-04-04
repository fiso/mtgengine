"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBomb extends Card {
  constructor(game) {
    super(game, "Goblin Bomb", "Weatherlight", "WTH");
  }
}

module.exports = GoblinBomb;
