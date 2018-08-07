"use strict";
const Constants = require ("../../../Constants");
const AgonizingMemoriesBase = require("../set10E/AgonizingMemories");

class AgonizingMemories extends AgonizingMemoriesBase {
  constructor (game) {
    super(game, "Agonizing Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AgonizingMemories;
