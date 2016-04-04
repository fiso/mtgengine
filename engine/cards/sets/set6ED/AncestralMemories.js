"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestralMemories extends Card {
  constructor(game) {
    super(game, "Ancestral Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AncestralMemories;
