"use strict";
const Constants = require ("../../../Constants");
const AncestralMemoriesBase = require("../set7ED/AncestralMemories");

class AncestralMemories extends AncestralMemoriesBase {
  constructor (game) {
    super(game, "Ancestral Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AncestralMemories;
