"use strict";
const Constants = require ("../../../Constants");
const AncestralMemoriesBase = require("../set6ED/AncestralMemories");

class AncestralMemories extends AncestralMemoriesBase {
  constructor (game) {
    super(game, "Ancestral Memories", "Seventh Edition", "7ED");
  }
}

module.exports = AncestralMemories;
