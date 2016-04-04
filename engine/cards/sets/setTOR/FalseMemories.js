"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalseMemories extends Card {
  constructor(game) {
    super(game, "False Memories", "Torment", "TOR");
  }
}

module.exports = FalseMemories;
