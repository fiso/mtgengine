"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistantMemories extends UnimplementedCard {
  constructor (game) {
    super(game, "Distant Memories", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DistantMemories;
