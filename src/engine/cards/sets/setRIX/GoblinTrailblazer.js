"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTrailblazer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Trailblazer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GoblinTrailblazer;
