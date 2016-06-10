"use strict";
const Constants = require ("../../../Constants");
const AgonizingMemoriesBase = require("../set6ED/AgonizingMemories");

class AgonizingMemories extends AgonizingMemoriesBase {
  constructor (game) {
    super(game, "Agonizing Memories", "Tenth Edition", "10E");
  }
}

module.exports = AgonizingMemories;
