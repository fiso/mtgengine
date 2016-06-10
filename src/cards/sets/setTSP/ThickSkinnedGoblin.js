"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThickSkinnedGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Thick-Skinned Goblin", "Time Spiral", "TSP");
  }
}

module.exports = ThickSkinnedGoblin;
