"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSharpshooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Sharpshooter", "Legendary Cube", "PZ1");
  }
}

module.exports = GoblinSharpshooter;
