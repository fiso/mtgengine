"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThickSkinnedGoblin extends Card {
  constructor(game) {
    super(game, "Thick-Skinned Goblin", "Time Spiral", "TSP");
  }
}

module.exports = ThickSkinnedGoblin;
