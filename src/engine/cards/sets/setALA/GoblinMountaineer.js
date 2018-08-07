"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMountaineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Mountaineer", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinMountaineer;
