"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DistantMemories extends Card {
  constructor(game) {
    super(game, "Distant Memories", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DistantMemories;
