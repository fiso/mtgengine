"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralMemories extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancestral Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AncestralMemories;
