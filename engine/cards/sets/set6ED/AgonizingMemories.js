"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgonizingMemories extends UnimplementedCard {
  constructor(game) {
    super(game, "Agonizing Memories", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AgonizingMemories;
