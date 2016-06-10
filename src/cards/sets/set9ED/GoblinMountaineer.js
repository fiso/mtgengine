"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMountaineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Mountaineer", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinMountaineer;
