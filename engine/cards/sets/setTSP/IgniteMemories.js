"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgniteMemories extends UnimplementedCard {
  constructor(game) {
    super(game, "Ignite Memories", "Time Spiral", "TSP");
  }
}

module.exports = IgniteMemories;
