"use strict";
const Constants = require ("../../../Constants");
const AgonizingMemoriesBase = require("../set10E/AgonizingMemories");

class AgonizingMemories extends AgonizingMemoriesBase {
  constructor (game) {
    super(game, "Agonizing Memories", "Seventh Edition", "7ED");
  }
}

module.exports = AgonizingMemories;
