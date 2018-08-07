"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SqueeGoblinNabob extends UnimplementedCard {
  constructor (game) {
    super(game, "Squee, Goblin Nabob", "Modern Masters", "MMA");
  }
}

module.exports = SqueeGoblinNabob;
