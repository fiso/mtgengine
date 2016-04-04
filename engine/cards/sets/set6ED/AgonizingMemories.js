"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgonizingMemories extends Card {
  constructor(game) {
    super(game, "Agonizing Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AgonizingMemories;
